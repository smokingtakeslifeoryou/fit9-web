import { useState, useEffect, memo } from "react";
import { Send, CheckCircle2, Shield, Clock, Heart } from "lucide-react";
import { useLead } from "../../context/LeadContext.jsx";
import { GOALS as GOAL_OPTIONS, LEAD_PROMISES } from "../../constants/content.js";
import { maskPhoneChange, isPhoneValid } from "../../utils/phone.js";
import { sendLead } from "../../utils/lead.js";
import { reachGoal, GOALS } from "../../utils/analytics.js";
import { SectionHead } from "../common/UI.jsx";

const PROMISE_ICONS = {
  heart: Heart,
  clock: Clock,
  shield: Shield,
};

function LeadForm() {
  const { selectedDirection, selectionId, openPrivacy } = useLead();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [direction, setDirection] = useState(GOAL_OPTIONS[0]);
  const [agreed, setAgreed] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  useEffect(() => {
    if (selectedDirection) {
      setDirection(selectedDirection);
    }
  }, [selectedDirection, selectionId]);

  const handlePhoneChange = (e) => {
    const raw = e.target.value;
    const { value } = maskPhoneChange({ value: raw, prev: phone, caret: e.target.selectionStart });
    setPhone(value);
    if (phoneError && isPhoneValid(value)) {
      setPhoneError(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isPhoneValid(phone)) {
      setPhoneError(true);
      return;
    }
    if (!agreed) return;

    setIsSubmitting(true);
    setPhoneError(false);

    reachGoal(GOALS.lead, { direction });

    const res = await sendLead({
      name: name.trim() || "Без имени",
      phone,
      direction,
    });

    setIsSubmitting(false);
    if (res.ok) {
      setIsSuccess(true);
    }
  };

  return (
    <section id="lead" className="py-20 md:py-28 bg-brand-sand">
      <div className="mx-auto max-w-shell px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Левая колонка: Заголовок и обещания */}
          <div className="lg:col-span-6">
            <SectionHead
              index="07"
              label="Запись"
              title="Запишитесь на первое занятие"
              text="Попробуйте любое направление студии со скидкой. Оставьте контакты, и мы свяжемся с вами для подбора времени."
            />

            <div className="space-y-6 mt-10">
              {LEAD_PROMISES.map((item, idx) => {
                const IconComponent = PROMISE_ICONS[item.icon] || Heart;
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-surface border border-brand-border/60 flex items-center justify-center shrink-0 text-brand-accent shadow-soft">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-ed text-xl font-medium text-brand-dark mb-1">
                        {item.t}
                      </h4>
                      <p className="text-sm text-brand-muted leading-relaxed">
                        {item.d}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Правая колонка: Форма */}
          <div className="lg:col-span-6 p-8 md:p-10 rounded-3xl bg-brand-surface border border-brand-border/80 shadow-card">
            {isSuccess ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-brand-sand flex items-center justify-center text-brand-accent mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-ed text-3xl font-medium text-brand-dark mb-3">
                  Заявка принята
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed max-w-md mb-8">
                  Администратор студии свяжется с вами в течение 15 минут в мессенджере. До скорой встречи в FIT9!
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false);
                    setPhone("");
                    setName("");
                  }}
                  className="btn btn-ghost btn-sm"
                >
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Как к вам обращаться"
                    className="field"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark mb-2">
                    Номер телефона *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="+7 (___) ___-__-__"
                    className={`field ${phoneError ? "field-err" : ""}`}
                  />
                  {phoneError && (
                    <p className="text-xs text-[#C0655A] mt-1.5 font-medium">
                      Пожалуйста, введите корректный 11-значный номер телефона
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark mb-2">
                    Интересующее направление
                  </label>
                  <select
                    value={direction}
                    onChange={(e) => setDirection(e.target.value)}
                    className="field"
                  >
                    {GOAL_OPTIONS.map((opt, idx) => (
                      <option key={idx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Чекбокс 152-ФЗ */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer text-xs text-brand-muted leading-relaxed select-none">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="cbx mt-0.5"
                    />
                    <span>
                      Я согласна на обработку персональных данных в соответствии с{" "}
                      <button
                        type="button"
                        onClick={openPrivacy}
                        className="underline text-brand-dark hover:text-brand-accent transition-colors"
                      >
                        Политикой конфиденциальности
                      </button>
                    </span>
                  </label>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting || !agreed}
                    className="btn btn-dark btn-block"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    <span>{isSubmitting ? "Отправляем..." : "Записаться на занятие"}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(LeadForm);
