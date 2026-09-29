import { memo } from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionHead } from "../common/UI.jsx";
import { useLead } from "../../context/LeadContext.jsx";
import { scrollToId } from "../../utils/motion.js";

const DIRECTIONS = [
  {
    id: "aero",
    title: "Аэройога в гамаках",
    desc: "Мягкая декомпрессия позвоночника, ощущение невесомости, развитие гибкости и глубокая релаксация в гамаке.",
    tag: "Хит студии",
    level: "Любой уровень",
  },
  {
    id: "stretching",
    title: "Мягкая растяжка & Шпагат",
    desc: "Бережная работа с подвижностью суставов и связок без форсирования. Подходит для любого уровня подготовки.",
    tag: "Базовое",
    level: "С нуля",
  },
  {
    id: "back",
    title: "Здоровая спина & Осанка",
    desc: "Укрепление мышечного корсета, снятие спазмов в шее и пояснице, формирование королевской осанки.",
    tag: "Оздоровление",
    level: "Любой уровень",
  },
  {
    id: "barre",
    title: "Барре & Подкачка",
    desc: "Смесь балета, пилатеса и функционального тренинга у станка. Красивый рельеф без перекачанных мышц.",
    tag: "Тонус",
    level: "Средняя нагрузка",
  },
  {
    id: "pilates",
    title: "Пилатес & Мобильность",
    desc: "Контроль дыхания, работа с глубокими мышцами кора, улучшение координации и осознанности тела.",
    tag: "Мягкий фитнес",
    level: "Любой уровень",
  },
];

function Directions() {
  const { selectDirection } = useLead();

  const handleSelect = (title) => {
    selectDirection(title);
    scrollToId("lead");
  };

  return (
    <section id="directions" className="py-20 md:py-28 bg-brand-sand">
      <div className="mx-auto max-w-shell px-5 md:px-8">
        <SectionHead
          index="01"
          label="Направления"
          title="Программы тренировок"
          text="Выберите направление по душе — от медитативного полета в гамаках до интенсивной проработки мышц"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {DIRECTIONS.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between p-7 md:p-8 rounded-3xl bg-brand-surface border border-brand-border/80 hover:border-brand-accent/60 hover:shadow-card transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-brand-champagne text-brand-dark">
                    {item.tag}
                  </span>
                  <span className="text-xs text-brand-muted font-medium">
                    {item.level}
                  </span>
                </div>
                <h3 className="font-ed text-2xl font-medium text-brand-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => handleSelect(item.title)}
                  className="inline-flex items-center gap-1.5 text-[.82rem] font-semibold text-brand-dark group-hover:text-brand-accentHover transition-colors"
                >
                  <span>Записаться на занятие</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Directions);
