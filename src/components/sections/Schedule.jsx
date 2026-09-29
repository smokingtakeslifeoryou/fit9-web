import { useState, useEffect, useRef, createElement, memo } from "react";
import { Maximize2, Minimize2, ExternalLink, User } from "lucide-react";
import { LINKS } from "../../constants/links.js";
import { withUTM } from "../../utils/utm.js";
import { reachGoal, GOALS } from "../../utils/analytics.js";
import { SectionHead } from "../common/UI.jsx";

function Schedule() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef(null);

  const toggleFullscreen = () => {
    const next = !isFullscreen;
    setIsFullscreen(next);
    if (next) {
      reachGoal(GOALS.scheduleFull);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
        document.body.style.overflow = "";
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isFullscreen]);

  useEffect(() => {
    const onMessage = (e) => {
      try {
        const origin = new URL(LINKS.scheduleOrigin).origin;
        if (e.origin !== origin) return;
      } catch (err) {}
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const scheduleUrl = withUTM(LINKS.schedule);
  const loginUrl = withUTM(LINKS.login);
  const buyUrl = withUTM(LINKS.buy);

  return (
    <section id="schedule" className="py-20 md:py-28 bg-brand-bg">
      <div className="mx-auto max-w-shell px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <SectionHead
            index="02"
            label="Расписание"
            title="Онлайн-расписание"
            text="Выберите удобное время и направление для тренировки"
          />

          <div className="flex items-center gap-3">
            <a
              href={loginUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => reachGoal(GOALS.loginOpen)}
              className="btn btn-ghost btn-sm"
            >
              <User className="w-4 h-4 mr-2" />
              <span>Личный кабинет</span>
            </a>
            <a
              href={buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => reachGoal(GOALS.book, { place: "schedule_header" })}
              className="btn btn-dark btn-sm"
            >
              <span>Купить абонемент</span>
            </a>
          </div>
        </div>

        {/* СТРОГО 1 IFRAME В DOM: переключение через CSS-классы родителя */}
        <div
          className={
            isFullscreen
              ? "fixed inset-0 z-50 bg-brand-surface flex flex-col p-4 sm:p-6"
              : "relative w-full h-[650px] rounded-3xl overflow-hidden border border-brand-border bg-brand-surface shadow-card"
          }
        >
          <div className="flex items-center justify-between px-5 py-3.5 bg-brand-sand border-b border-brand-border/60">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-dark">Онлайн-запись FIT9</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleFullscreen}
                className="p-1.5 rounded-lg text-brand-muted hover:text-brand-dark hover:bg-brand-surface transition-colors"
                title={isFullscreen ? "Свернуть" : "На весь экран"}
                aria-label={isFullscreen ? "Свернуть" : "На весь экран"}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <a
                href={scheduleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-brand-muted hover:text-brand-dark hover:bg-brand-surface transition-colors"
                title="Открыть в новой вкладке"
                aria-label="Открыть в новой вкладке"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {!loaded && (
            <div className="absolute inset-0 top-[53px] flex items-center justify-center bg-brand-surface/80 backdrop-blur-sm z-10">
              <div className="w-8 h-8 border-2 border-brand-accent border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {createElement("iframe", {
            ref: iframeRef,
            src: scheduleUrl,
            title: "Онлайн-расписание занятий FIT9",
            onLoad: () => setLoaded(true),
            className: `h-[calc(100%-53px)] w-full border-0 ${loaded ? "opacity-100" : "opacity-0"}`,
            loading: "lazy",
            allow: "payment",
          })}
        </div>
      </div>
    </section>
  );
}

export default memo(Schedule);
