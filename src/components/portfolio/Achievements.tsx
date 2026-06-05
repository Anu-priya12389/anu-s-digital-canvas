import { FiStar } from "react-icons/fi";
import { Section } from "./Section";
import { usePortfolio } from "@/hooks/use-portfolio";

export function Achievements() {
  const { data } = usePortfolio();
  const items = data?.achievements ?? [];
  return (
    <Section id="achievements" eyebrow="Highlights" title="Achievements" description="Moments that shaped my journey.">
      <ol className="relative mx-auto max-w-3xl border-l border-border pl-6 md:pl-8">
        {items.map((a) => (
          <li key={a.id} className="group relative mb-8 last:mb-0">
            <span className="absolute -left-[34px] grid h-7 w-7 place-items-center rounded-full bg-gradient-accent text-accent-foreground shadow-glow ring-4 ring-background md:-left-[42px]">
              <FiStar size={14} />
            </span>
            <div className="glass rounded-2xl p-5 shadow-card transition-transform group-hover:-translate-y-0.5">
              <h3 className="font-display text-lg font-semibold">{a.title}</h3>
              {a.description && <p className="mt-1 text-sm text-muted-foreground">{a.description}</p>}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
