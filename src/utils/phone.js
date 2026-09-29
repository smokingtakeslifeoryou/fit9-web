export function digitsOf(raw) {
  return String(raw || "").replace(/\D/g, "");
}

export function formatPhone(raw) {
  let digits = digitsOf(raw);
  if (!digits) return "";
  if (digits[0] === "8" || digits[0] === "7") digits = digits.slice(1);
  digits = digits.slice(0, 10);

  let res = "+7";
  if (digits.length > 0) res += ` (${digits.slice(0, 3)}`;
  if (digits.length >= 3) res += `) ${digits.slice(3, 6)}`;
  if (digits.length >= 6) res += `-${digits.slice(6, 8)}`;
  if (digits.length >= 8) res += `-${digits.slice(8, 10)}`;
  return res;
}

export function maskPhoneChange({ value, prev = "", caret = 0 }) {
  const digits = digitsOf(value);
  const formatted = formatPhone(value);

  // Расчет позиции курсора
  let nextCaret = caret;
  if (formatted.length > prev.length) {
    if (formatted[caret - 1] === ")" || formatted[caret - 1] === " " || formatted[caret - 1] === "-") {
      nextCaret = caret + 1;
    }
  }
  return { value: formatted, caret: Math.min(nextCaret, formatted.length) };
}

export function isPhoneValid(phone) {
  const digits = digitsOf(phone);
  return digits.length === 11 && (digits[0] === "7" || digits[0] === "8");
}
