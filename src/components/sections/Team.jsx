import { memo } from "react";
import { Award } from "lucide-react";
import { SectionHead } from "../common/UI.jsx";

const TEAM = [
  {
    name: "Анастасия",
    role: "Старший тренер & Аэройога",
    exp: "Опыт 6 лет",
    desc: "Дипломированный специалист по адаптивной физкультуре. Мягко вводит в практику невесомости без страха и зажимов.",
  },
  {
    name: "Валерия",
    role: "Тренер по растяжке & Барре",
    exp: "Опыт 5 лет",
    desc: "Бывшая артистка балета. Знает, как развить красивую грацию и гибкость без боли, микротравм и надрыва связок.",
  },
  {
    name: "Екатерина",
    role: "Пилатес & Здоровая спина",
    exp: "Опыт 4 года",
    desc: "Сертифицированный тренер по функциональному восстановлению осанки. Помогает избавиться от болей в шее и пояснице.",
  },
];

function Team() {
  return (
    <section id="team" className="py-20 md:py-28 bg-brand-bg">
      <div className="mx-auto max-w-shell px-5 md:px-8">
        <SectionHead
          index="05"
          label="Команда"
          title="Заботливые наставники"
          text="Наши тренеры имеют профильное спортивное и методическое образование. Никаких случайных людей — только чуткое ведение к вашим целям."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {TEAM.map((coach, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-brand-surface border border-brand-border/80 shadow-soft hover:shadow-card hover:border-brand-accent/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-brand-sand text-brand-muted">
                    {coach.exp}
                  </span>
                </div>
                <h3 className="font-ed text-3xl font-medium text-brand-dark mb-1">
                  {coach.name}
                </h3>
                <p className="text-sm font-semibold text-brand-accent mb-4">
                  {coach.role}
                </p>
                <p className="text-sm leading-relaxed text-brand-muted mb-6">
                  {coach.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-border/60 flex items-center gap-2 text-xs text-brand-muted">
                <Award className="w-4 h-4 text-brand-accent" />
                <span>Сертифицированный инструктор</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Team);
