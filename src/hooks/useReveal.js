import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      document.querySelectorAll(".rv, .mask-line").forEach((el) => {
        el.classList.add("rv-in", "mask-in");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("rv-in", "mask-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -40px 0px", threshold: 0.1 }
    );

    document.querySelectorAll(".rv, .mask-line").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
