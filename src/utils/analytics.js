export const GOALS = {
  lead: "LEAD_SUBMIT",
  book: "BOOK_CLICK",
  scheduleOpen: "SCHEDULE_OPEN",
  scheduleFull: "SCHEDULE_FULL",
  loginOpen: "LOGIN_OPEN",
  messenger: "MESSENGER_CLICK",
  call: "CALL_CLICK",
  privacyOpen: "PRIVACY_OPEN",
};

export function reachGoal(target, params = {}) {
  if (typeof window !== "undefined" && typeof window.ym === "function") {
    try {
      const ymId = Number(import.meta.env.VITE_YM_ID) || 99999999;
      window.ym(ymId, "reachGoal", target, params);
    } catch (e) {
      console.warn(`[YM] Target error: ${target}`, e);
    }
  }
  if (import.meta.env.DEV) {
    console.log(`%c[YM Goal] ${target}`, "color: #C5A898; font-weight: bold;", params);
  }
}
