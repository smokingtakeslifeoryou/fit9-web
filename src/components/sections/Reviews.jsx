import { memo } from "react";
import { Star, Quote } from "lucide-react";
import { SectionHead } from "../common/UI.jsx";

const REVIEWS = [
  {
    author: "Алина Р.",
    tag: "Аэройога",
    text: "До FIT9 я панически боялась висеть вниз головой. Анастасия так мягко и понятно всё объяснила, что в конце первого занятия я летала! Спина перестала болеть уже после третьей тренировки.",
  },
  {
    author: "Диана М.",
    tag: "Здоровая спина",
    text: "Работаю за ноутбуком по 10 часов в день, шея была как каменная. Здесь невероятно бережный подход: никто не заставляет терпеть боль. Выходишь с ощущением легкости и расправленными плечами.",
  },
  {
    author: "Камилла С.",
    tag: "Барре & Шпагат",
    text: "Обожаю это пространство в Конди! Очень стильно, всегда вкусно пахнет, чисто и нет толпы людей, как в фитнес-клубах. За 2 месяца занятий тело подтянулось лучше, чем за год в тренажёрке.",
  },
];

function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-brand-bg">
      <div className="mx-auto max-w-shell px-5 md:px-8">
        <SectionHead
          index="06"
          label="Отзывы"
          title="Впечатления наших девушек"
          text="Реальные истории тех, кто уже обрел легкость движения и гармонию с телом в нашей студии"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-brand-surface border border-brand-border/80 shadow-soft hover:shadow-card hover:border-brand-accent/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-brand-accent/40" />
                </div>
                <p className="text-sm leading-relaxed text-brand-dark/90 italic mb-8">
                  «{rev.text}»
                </p>
              </div>

              <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between">
                <span className="font-ed text-lg font-medium text-brand-dark">
                  {rev.author}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-brand-sand text-brand-muted">
                  {rev.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Reviews);
