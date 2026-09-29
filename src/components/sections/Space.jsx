import { memo } from "react";
import { Wind, Sun, Users2, Coffee } from "lucide-react";
import { SectionHead } from "../common/UI.jsx";

const ADVANTAGES = [
  {
    icon: Wind,
    title: "Потолки 4.5 метра и чистый воздух",
    desc: "Просторный светлый лофт с профессиональной приточно-вытяжной вентиляцией и комфортной температурой для практик.",
  },
  {
    icon: Sun,
    title: "Панорамный естественный свет",
    desc: "Большие арочные окна исторического пространства наполняют студию мягким дневным светом без слепящих прожекторов.",
  },
  {
    icon: Users2,
    title: "Мини-группы строго до 8 девушек",
    desc: "Никаких переполненных залов. Тренер успевает скорректировать технику каждого движения и уделить внимание каждой.",
  },
  {
    icon: Coffee,
    title: "Уютный лаунж и забота о деталях",
    desc: "Удобные раздевалки, индивидуальные шкафчики, душевые, ароматный чай, полезные снеки и бьюти-зона со всем необходимым.",
  },
];

function Space() {
  return (
    <section id="space" className="py-20 md:py-28 bg-brand-sand">
      <div className="mx-auto max-w-shell px-5 md:px-8">
        <SectionHead
          index="04"
          label="Пространство"
          title="Студия в «Конди Лофт»"
          text="Атмосфера уюта, эстетики и безупречной чистоты, созданная специально для женских тренировок"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {ADVANTAGES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-brand-surface border border-brand-border/80 hover:border-brand-accent/50 hover:shadow-card transition-all duration-300 flex items-start gap-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-sand flex items-center justify-center shrink-0 text-brand-dark border border-brand-border/60">
                  <Icon className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="font-ed text-2xl font-medium text-brand-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-brand-muted">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default memo(Space);
