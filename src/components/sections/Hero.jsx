import { memo } from "react";
import { ArrowRight, Calendar, Star, MapPin } from "lucide-react";
import { scrollToId } from "../../utils/motion.js";
import { reachGoal, GOALS } from "../../utils/analytics.js";
import { Em } from "../common/UI.jsx";

function Hero() {
  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-brand-bg">
      <div className="mx-auto max-w-shell px-5 md:px-8">
        <div className="max-w-3xl">
          {/* Локация */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-sand border border-brand-border/60 text-xs font-medium text-brand-dark mb-6">
            <MapPin className="w-3.5 h-3.5 text-brand-accent" />
            <span>г. Уфа · Пространство «Конди Лофт»</span>
          </div>

          {/* Заголовок */}
          <h1 className="font-ed text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-brand-dark leading-[1.08] tracking-tight mb-6">
            Студия фитнеса, растяжки и <Em>аэройоги</Em> для девушек
          </h1>

          {/* Подзаголовок */}
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed mb-10 max-w-2xl">
            Камерное пространство с высокими потолками. Мини-группы до 8 девушек, заботливые тренеры с профильным образованием и тренировки без боли и надрыва.
          </p>

          {/* CTA-кнопки */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
            <button
              type="button"
              onClick={() => {
                reachGoal(GOALS.book, { place: "hero" });
                scrollToId("lead");
              }}
              className="btn btn-dark"
            >
              <span>Записаться на пробное</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>

            <button
              type="button"
              onClick={() => {
                reachGoal(GOALS.scheduleOpen, { place: "hero" });
                scrollToId("schedule");
              }}
              className="btn btn-ghost"
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span>Расписание занятий</span>
            </button>
          </div>

          {/* Преимущества и рейтинг */}
          <div className="pt-8 border-t border-brand-border/60 flex flex-wrap items-center gap-6 sm:gap-10">
            <div className="flex items-center gap-3">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <div className="text-xs">
                <span className="font-bold text-brand-dark mr-1">4.9</span>
                <span className="text-brand-muted">в Яндекс и 2ГИС</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-brand-dark">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
              <span>До 8 девушек в группе</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-brand-dark">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
              <span>5 направлений под любую цель</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Hero);
