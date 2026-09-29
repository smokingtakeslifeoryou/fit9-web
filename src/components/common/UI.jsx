import { memo } from "react";

export const Em = memo(function Em({ children }) {
  return <em className="font-ed italic font-normal text-brand-accentHover">{children}</em>;
});

export const Label = memo(function Label({ children, className = "" }) {
  return (
    <span className={`label inline-flex items-center gap-2 ${className}`}>
      <span className="inline-block h-px w-6 bg-brand-accent" />
      {children}
    </span>
  );
});

export const Rv = memo(function Rv({ children, delay = 0, className = "" }) {
  return (
    <div className={`rv ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
});

export const SectionHead = memo(function SectionHead({ index, label, title, text, center = false }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <div className={`flex items-center gap-4 ${center ? "justify-center" : ""}`}>
        {index && <span className="font-ed text-[.95rem] italic text-brand-accent">{index}</span>}
        <Label>{label}</Label>
      </div>
      <h2 className="font-ed mt-7 text-[clamp(1.95rem,4.3vw,3.25rem)] font-medium leading-[1.08] tracking-[-.02em] text-brand-dark">
        {title}
      </h2>
      {text && (
        <p className="mt-6 text-[1rem] leading-[1.85] text-brand-muted">
          {text}
        </p>
      )}
    </div>
  );
});
