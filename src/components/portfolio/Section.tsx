import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id={id} className="reveal scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          {eyebrow && (
            <p className="mb-3 inline-flex rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground">
              {eyebrow}
            </p>
          )}
          <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            <span className="text-gradient">{title}</span>
          </h2>
          {description && <p className="mt-4 text-muted-foreground md:text-lg">{description}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
