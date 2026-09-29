import { useState, useEffect, useCallback, memo } from "react";
import { useLead } from "../../context/LeadContext.jsx";

const STORAGE_KEY = "fit9_cookie_accepted";

function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const { openPrivacy } = useLead();

  useEffect(() => {
    try {
      const accepted = localStorage.getItem(STORAGE_KEY);
      if (!accepted) {
        const timer = setTimeout(() => setVisible(true), 1500);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      /* localStorage недоступен */
    }
  }, []);

  const accept = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch (e) {}
    setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Уведомление об использовании cookie"
      className="fixed bottom-5 left-5 right-5 z-[70] mx-auto max-w-xl rounded-3xl border border-brand-border/80 bg-white/95 p-5 shadow-deep backdrop-blur-md transition-all duration-500 sm:left-8 sm:right-auto"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[.82rem] leading-relaxed text-brand-muted">
          Мы используем cookie для корректной работы онлайн-записи и аналитики. Подробнее в нашей{" "}
          <button
            type="button"
            onClick={openPrivacy}
            className="ul font-semibold text-brand-dark transition-colors hover:text-brand-accentHover"
          >
            Политике конфиденциальности
          </button>
          .
        </p>
        <button
          type="button"
          onClick={accept}
          className="btn btn-dark btn-sm flex-none"
        >
          Хорошо
        </button>
      </div>
    </div>
  );
}

export default memo(CookieBanner);
