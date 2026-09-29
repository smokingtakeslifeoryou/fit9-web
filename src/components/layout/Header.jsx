import { memo } from "react";
import { MessageCircle, Phone, Calendar } from "lucide-react";
import { LINKS } from "../../constants/links.js";
import { reachGoal, GOALS } from "../../utils/analytics.js";
import { scrollToId } from "../../utils/motion.js";

const NAV_ITEMS = [
  { label: "Направления", id: "directions" },
  { label: "Расписание", id: "schedule" },
  { label: "Абонементы", id: "pricing" },
  { label: "Команда", id: "team" },
  { label: "Студия", id: "space" },
  { label: "Отзывы", id: "reviews" },
  { label: "Контакты", id: "contacts" },
];

function Header() {
  const onNavClick = (id) => (e) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-dark/[.06] bg-brand-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-shell items-center justify-between px-5 md:px-8">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2.5 text-brand-dark focus:outline-none"
        >
          <span className="font-ed text-2xl font-bold tracking-tight">FIT9</span>
          <span className="hidden h-4 w-px bg-brand-dark/15 sm:inline-block" />
          <span className="hidden text-[.72rem] font-medium uppercase tracking-[.2em] text-brand-muted sm:inline-block">
            Конди Лофт
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-7" aria-label="Основная навигация">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={onNavClick(item.id)}
              className="text-[.82rem] font-medium text-brand-muted transition-colors hover:text-brand-dark"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => reachGoal(GOALS.messenger, { place: "header", target: "wa" })}
            className="btn btn-ghost btn-sm hidden sm:inline-flex"
            aria-label="Написать в WhatsApp"
          >
            <MessageCircle className="h-3.5 w-3.5 text-brand-accentHover" strokeWidth={1.5} />
            <span className="hidden xl:inline">WhatsApp</span>
          </a>
          <a
            href={`tel:${LINKS.phone}`}
            onClick={() => reachGoal(GOALS.call, { place: "header" })}
            className="btn btn-ghost btn-sm hidden sm:inline-flex"
            aria-label="Позвонить в студию"
          >
            <Phone className="h-3.5 w-3.5 text-brand-accentHover" strokeWidth={1.5} />
            <span className="hidden xl:inline">{LINKS.phoneDisplay}</span>
          </a>
          <button
            type="button"
            onClick={() => {
              reachGoal(GOALS.book, { place: "header" });
              scrollToId("schedule");
            }}
            className="btn btn-dark btn-sm"
          >
            <Calendar className="h-3.5 w-3.5" strokeWidth={1.5} />
            Записаться
          </button>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
