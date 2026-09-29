import { memo } from "react";
import { Check, ArrowRight } from "lucide-react";
import { LINKS } from "../../constants/links.js";
import { withUTM } from "../../utils/utm.js";
import { scrollToId } from "../../utils/motion.js";
import { reachGoal, GOALS } from "../../utils/analytics.js";
import { SectionHead } from "../common/UI.jsx";

const PLANS = [
  {
    id: "trial",
    title: "Пробное занятие",
    price: "500 ₽",
    badge: "Для новичков",
    popular: false,
    desc: "Идеально для знакомства со студией, атмосферой и тренером.",
    features: [
      "Любое направление на выбор",
      "Бесплатно при покупке абонемента в день занятия",
      "Знакомство с тренером и залом",
      "Консультация по целям",
    ],
    cta: "Записаться",
    action: "lead",
  },
  {
    id: "8_classes",
    title: "8 занятий",
    price: "4 200 ₽",
    badge: "Хит выбора",
    popular: true,
    desc: "Оптимальный темп: 2 регулярные тренировки в неделю.",
    features: [
      "Срок действия: 30 дней",
      "Доступ ко всем направлениям студии",
      "Заморозка абонемента на 7 дней",
      "Мини-группы до 8 человек",
    ],
    cta: "Купить абонемент",
    action: "buy",
  },
  {
    id: "12_classes",
    title: "12 занятий",
    price: "5 700 ₽",
    badge: "Максимальный результат",
    popular: false,
    desc: "Для регулярных тренировок 3 раза в неделю.",
    features: [
      "Срок действия: 45 дней",
      "Доступ ко всем направлениям студии",
      "Заморозка абонемента на 10 дней",
      "Мини-группы до 8 человек",
    ],
    cta: "Купить абонемент",
    action: "buy",
  },
];

function Pricing() {
  const buyUrl = withUTM(LINKS.buy);

  return (
    <section id="pricing" className="py-20 md:py-28 bg-brand-sand">
      <div className="mx-auto max-w-shell px-5 md:px-8">
        <SectionHead
          index="03"
          label="Стоимость"
          title="Абонементы и цены"
          text="Прозрачные тарифы без скрытых доплат. Пробное занятие станет бесплатным при покупке абонемента в день занятия."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col justify-between p-8 rounded-3xl transition-all duration-300 ${
                plan.popular
                  ? "bg-brand-surface border-2 border-brand-accent shadow-card md:-translate-y-2"
                  : "bg-brand-surface border border-brand-border/80 hover:border-brand-border hover:shadow-soft"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {plan.popular ? (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-accent text-white">
                      {plan.badge}
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-brand-sand text-brand-muted">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-ed text-3xl font-medium text-brand-dark mb-2">{plan.title}</h3>
                <p className="text-sm text-brand-muted mb-6">{plan.desc}</p>
                <div className="font-ed text-4xl font-medium text-brand-dark mb-8">{plan.price}</div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-brand-dark/85">
                      <Check className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {plan.action === "buy" ? (
                  <a
                    href={buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => reachGoal(GOALS.book, { plan: plan.id })}
                    className={`btn btn-block ${plan.popular ? "btn-accent" : "btn-dark"}`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      reachGoal(GOALS.book, { plan: "trial" });
                      scrollToId("lead");
                    }}
                    className="btn btn-dark btn-block"
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Pricing);
