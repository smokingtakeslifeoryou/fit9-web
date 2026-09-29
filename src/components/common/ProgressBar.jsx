import { useEffect, useRef, memo } from "react";

function ProgressBar() {
  const barRef = useRef(null);

  useEffect(() => {
    let frameId = 0;
    const update = () => {
      frameId = 0;
      const el = barRef.current;
      if (!el) return;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
      el.style.transform = `scaleX(${progress})`;
    };

    const onScroll = () => {
      if (!frameId) {
        frameId = requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[100] h-[3px] w-full pointer-events-none bg-transparent"
      aria-hidden="true"
    >
      <div
        ref={barRef}
        className="h-full w-full bg-brand-accent origin-left will-change-transform"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}

export default memo(ProgressBar);
