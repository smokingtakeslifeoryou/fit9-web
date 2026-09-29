import { memo } from "react";
import { MessageCircle, Send, MapPin, ArrowUp } from "lucide-react";
import { LINKS } from "../../constants/links.js";
import { reachGoal, GOALS } from "../../utils/analytics.js";
import { useLead } from "../../context/LeadContext.jsx";

function Footer() {
  const { openPrivacy } = useLead();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-brand-dark/[.08] bg-brand-sand py-16 md:py-20">
      <div className="mx-auto max-w-shell px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="font-ed text-3xl font-bold tracking-tight text-brand-dark">FIT9</span>
            <p className="mt-4 max-w-sm text-[.9rem] leading-relaxed text-brand-muted">
              Женская студия осознанного фитнеса, растяжки и аэройоги в историческом лофт-пространстве Уфы.
            </p>
            <div className="mt-6 flex items-start gap-3 text-[.86rem] text-brand-dark">
              <MapPin className="h-4 w-4 flex-none text-brand-accentHover mt-0.5" strokeWidth={1.5} />
              <span>{LINKS.address}</span>
            </div>
          </div>
          <div className="lg:col-span-4">
            <span className="label">Связь с нами</span>
            <div className="mt-5 space-y-3">
              <div>
                <a
                  href={`tel:${LINKS.phone}`}
                  onClick={() => reachGoal(GOALS.call, { place: "footer" })}
                  className="font-ed text-xl font-medium text-brand-dark transition-colors hover:text-brand-accentHover"
                >
                  {LINKS.phoneDisplay}
                </a>
                <p className="mt-1 text-[.78rem] text-brand-faint">Ежедневно с 08:00 до 21:00</p>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href={LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => reachGoal(GOALS.messenger, { place: "footer", target: "wa" })}
                  className="btn btn-ghost btn-sm"
                >
                  <MessageCircle className="h-4 w-4 text-brand-accentHover" strokeWidth={1.4} /> WhatsApp
                </a>
                <a
                  href={LINKS.tgAdmin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => reachGoal(GOALS.messenger, { place: "footer", target: "tg" })}
                  className="btn btn-ghost btn-sm"
                >
                  <Send className="h-4 w-4 text-brand-accentHover" strokeWidth={1.4} /> Telegram
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between lg:col-span-3 lg:items-end">
            <button
              type="button"
              onClick={scrollToTop}
              className="btn btn-ghost btn-sm w-fit"
            >
              <ArrowUp className="h-4 w-4" strokeWidth={1.5} /> Наверх
            </button>
            <div className="mt-8 lg:mt-0 lg:text-right">
              <button
                type="button"
                onClick={openPrivacy}
                className="ul text-[.8rem] font-medium text-brand-muted transition-colors hover:text-brand-dark"
              >
                Политика конфиденциальности
              </button>
              <p className="mt-2 text-[.74rem] text-brand-faint">
                © {new Date().getFullYear()} Студия FIT9. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
