import { useEffect, memo } from "react";
import { X, Shield } from "lucide-react";
import { LINKS } from "../../constants/links.js";

function PrivacyModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      <div
        className="fixed inset-0 bg-brand-dark/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-4xl border border-brand-border/80 bg-white shadow-deep">
        <div className="flex items-center justify-between border-b border-brand-dark/[.07] px-6 py-5 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-accent/15 text-brand-accentHover">
              <Shield className="h-4 w-4" strokeWidth={1.5} />
            </span>
            <h2 id="privacy-modal-title" className="font-ed text-xl font-medium text-brand-dark sm:text-2xl">
              Политика конфиденциальности
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="btn btn-ghost btn-sm !p-2"
            aria-label="Закрыть"
          >
            <X className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>
        <div className="ios-scroll flex-1 overflow-y-auto px-6 py-6 text-[.88rem] leading-[1.8] text-brand-muted sm:px-8 sm:py-7">
          <p className="font-semibold text-brand-dark">1. Общие положения</p>
          <p className="mt-2">
            Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок обработки и меры по обеспечению безопасности данных женской студии фитнеса и растяжки «FIT9» (г. Уфа, ул. Менделеева, 132, пространство «Конди Лофт»).
          </p>
          <p className="mt-6 font-semibold text-brand-dark">2. Состав собираемых данных</p>
          <p className="mt-2">
            При заполнении формы заявки или записи через виджет студия собирает: имя, номер телефона, выбранное направление и комментарии. Данные используются исключительно для обратной связи, консультации и бронирования слотов на тренировки.
          </p>
          <p className="mt-6 font-semibold text-brand-dark">3. Конфиденциальность и безопасность</p>
          <p className="mt-2">
            Студия не передает номера телефонов и персональные данные третьим лицам, не занимается спам-рассылками и обеспечивает хранение данных в защищенном контуре. Связь осуществляется только администраторами студии через мессенджеры (Telegram, WhatsApp) или телефон.
          </p>
          <p className="mt-6 font-semibold text-brand-dark">4. Контакты студии</p>
          <p className="mt-2">
            По любым вопросам обработки ваших данных вы можете обратиться напрямую:
            Телефон: <a href={`tel:${LINKS.phone}`} className="ul font-medium text-brand-dark">{LINKS.phoneDisplay}</a>
            Адрес: {LINKS.address}
          </p>
        </div>
        <div className="border-t border-brand-dark/[.07] bg-brand-sand/40 px-6 py-4 sm:px-8 flex justify-end">
          <button type="button" onClick={onClose} className="btn btn-dark btn-sm">
            Понятно
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(PrivacyModal);
