import { getUTMString } from "./utm.js";

export async function sendLead(payload) {
  const data = {
    ...payload,
    utm: getUTMString(),
    timestamp: new Date().toISOString(),
    source: "fit9.ru",
  };

  if (import.meta.env.DEV) {
    console.log("%c[LEAD SUBMITTED DEV]", "color: #7D9B76; font-weight: bold;", data);
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { ok: true };
  }

  try {
    const endpoint = import.meta.env.VITE_API_ENDPOINT || "/api/lead";
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return { ok: response.ok };
  } catch (error) {
    console.error("[LEAD API ERROR]", error);
    return { ok: false };
  }
}
