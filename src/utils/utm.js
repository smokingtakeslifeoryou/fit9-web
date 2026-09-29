const UTM_STORAGE_KEY = "fit9_utm_params";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];

export function captureUTM() {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    const captured = {};
    let hasAny = false;

    UTM_KEYS.forEach((key) => {
      const val = params.get(key);
      if (val) {
        captured[key] = val;
        hasAny = true;
      }
    });

    if (hasAny) {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(captured));
    }
  } catch (e) {
    /* sessionStorage может быть заблокирован */
  }
}

export function getStoredUTM() {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(UTM_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

export function withUTM(url) {
  if (!url) return "";
  const stored = getStoredUTM();
  if (Object.keys(stored).length === 0) return url;

  try {
    const parsed = new URL(url);
    Object.entries(stored).forEach(([k, v]) => {
      if (!parsed.searchParams.has(k)) {
        parsed.searchParams.set(k, v);
      }
    });
    return parsed.toString();
  } catch (e) {
    return url;
  }
}

export function getUTMString() {
  const stored = getStoredUTM();
  return Object.entries(stored)
    .map(([k, v]) => `${k}=${v}`)
    .join(", ");
}
