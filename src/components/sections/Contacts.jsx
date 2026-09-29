import { memo } from "react";
import { MapPin, Phone, MessageCircle, Send, Clock, Navigation } from "lucide-react";
import { LINKS } from "../../constants/links.js";
import { withUTM } from "../../utils/utm.js";
import { reachGoal, GOALS } from "../../utils/analytics.js";
import { SectionHead } from "../common/UI.jsx";

function Contacts() {
  return (
    <section id="contacts" className="py-20 md:py-28 bg-brand-bg">
      <div className="mx-auto max-w-shell px-5 md:px-8">
        <SectionHead
          index="08"
          label="Контакты"
          title="Как нас найти"
          text="Студия находится в творческом пространстве «Конди Лофт» в удобном районе Уфы"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12 items-stretch">
          {/* Контактная информация */}
          <div className="lg:col-span-5 p-8 md:p-10 rounded-3xl bg-brand-surface border border-brand-border/80 shadow-soft flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">
                  <MapPin className="w-4 h-4 text-brand-accent" />
                  <span>Адрес студии</span>
                </div>
                <p className="font-ed text-2xl font-medium text-brand-dark mb-1">
                  {LINKS.address}
                </p>
                <p className="text-sm text-brand-muted">
                  Историческое здание кондитерской фабрики, главный вход в кластер, 2 этаж.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2">
                  <Clock className="w-4 h-4 text-brand-accent" />
                  <span>Телефон & Режим работы</span>
                </div>
                <a
                  href={`tel:${LINKS.phone}`}
                  onClick={() => reachGoal(GOALS.call, { place: "contacts" })}
                  className="font-ed text-2xl font-medium text-brand-dark transition-colors hover:text-brand-accentHover block mb-1"
                >
                  {LINKS.phoneDisplay}
                </a>
                <p className="text-sm text-brand-muted">
                  Ежедневно: с 08:00 до 21:00
                </p>
              </div>

              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-brand-muted mb-3">
                  Быстрые сообщения
                </span>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={withUTM(LINKS.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => reachGoal(GOALS.messenger, { place: "contacts", target: "wa" })}
                    className="btn btn-ghost btn-sm"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={withUTM(LINKS.tgAdmin)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => reachGoal(GOALS.messenger, { place: "contacts", target: "tg" })}
                    className="btn btn-ghost btn-sm"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    <span>Telegram</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-brand-border/60">
              <a
                href={withUTM(LINKS.yandexMaps)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark btn-block"
              >
                <Navigation className="w-4 h-4 mr-2" />
                <span>Построить маршрут на Яндекс.Картах</span>
              </a>
            </div>
          </div>

          {/* Визуальная плашка карты и навигации */}
          <div className="lg:col-span-7 p-8 md:p-10 rounded-3xl bg-brand-sand border border-brand-border/80 flex flex-col justify-between">
            <div>
              <span className="label block mb-3">Как добраться</span>
              <h3 className="font-ed text-3xl font-medium text-brand-dark mb-4">
                Удобно на автомобиле и общественном транспорте
              </h3>
              <p className="text-sm leading-relaxed text-brand-muted mb-8">
                Въезд на территорию «Конди Лофт» со стороны улицы Менделеева. Для резидентов и гостей студии предусмотрена удобная парковка. Если вы добираетесь на автобусе — остановка «Конди» находится прямо напротив входа в комплекс.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-5 rounded-2xl bg-brand-surface border border-brand-border/60">
                  <span className="block font-semibold text-xs uppercase tracking-wider text-brand-dark mb-1">
                    На авто
                  </span>
                  <span className="text-xs text-brand-muted">
                    Бесплатная парковка на территории кластера «Конди»
                  </span>
                </div>
                <div className="p-5 rounded-2xl bg-brand-surface border border-brand-border/60">
                  <span className="block font-semibold text-xs uppercase tracking-wider text-brand-dark mb-1">
                    Пешком
                  </span>
                  <span className="text-xs text-brand-muted">
                    2 минуты от остановки «Конди» (ул. Менделеева)
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-ed text-xl font-medium text-brand-dark mb-1">
                  Заблудились или нужна помощь?
                </h4>
                <p className="text-xs text-brand-muted">
                  Позвоните нам — администратор встретит вас у входа
                </p>
              </div>
              <a
                href={`tel:${LINKS.phone}`}
                className="btn btn-ghost btn-sm shrink-0"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>Позвонить</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Contacts);
