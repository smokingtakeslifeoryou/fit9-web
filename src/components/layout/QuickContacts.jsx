import { memo } from "react";
import { MessageCircle, Send } from "lucide-react";
import { LINKS } from "../../constants/links.js";
import { reachGoal, GOALS } from "../../utils/analytics.js";

function QuickContacts() {
  return (
    <aside
      aria-label="Быстрая связь в мессенджерах"
      className="fixed bottom-6 right-5 z-40 flex flex-col gap-2.5 sm:bottom-8 sm:right-8"
    >
      <a
        href={LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => reachGoal(GOALS.messenger, { place: "quick", target: "wa" })}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#25D366] shadow-card border border-brand-border/80 transition-transform duration-300 hover:scale-110 active:scale-95"
        aria-label="Написать в WhatsApp"
        title="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" strokeWidth={1.5} />
      </a>
      <a
        href={LINKS.tgAdmin}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => reachGoal(GOALS.messenger, { place: "quick", target: "tg" })}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#229ED9] shadow-card border border-brand-border/80 transition-transform duration-300 hover:scale-110 active:scale-95"
        aria-label="Написать в Telegram"
        title="Telegram администратора"
      >
        <Send className="h-5 w-5 ml-[-1px]" strokeWidth={1.5} />
      </a>
    </aside>
  );
}

export default memo(QuickContacts);
