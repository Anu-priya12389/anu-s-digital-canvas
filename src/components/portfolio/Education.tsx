import { FiAward } from "react-icons/fi";
import { Section } from "./Section";
import { usePortfolio } from "@/hooks/use-portfolio";

export function Education() {
  const { data } = usePortfolio();
  const items = data?.education ?? [];
  return (
    <Section id="education" eyebrow="Education" title="Academic Journey" description="Building strong foundations one milestone at a time.">
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent md:left-1/2" />
        {items.map((e, i) => (
          <div key={e.id} className={`relative mb-10 grid items-center gap-6 md:grid-cols-2 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
            <div className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
              <span className="absolute left-1.5 grid h-7 w-7 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow md:left-1/2 md:-translate-x-1/2">
                <FiAward size={14} />
              </span>
              <div className="glass rounded-2xl p-6 shadow-card">
                <p className="text-xs font-medium uppercase tracking-wide text-accent">{e.year}</p>
                <h3 className="mt-1 font-display text-xl font-semibold">{e.degree}</h3>
                <p className="mt-1 text-muted-foreground">{e.institution}</p>
                {e.cgpa && (
                  <p className="mt-3 inline-flex rounded-full bg-secondary px-3 py-1 text-sm font-semibold">
                    CGPA: <span className="ml-1 text-gradient">{e.cgpa}</span>
                  </p>
                )}
              </div>
            </div>
            <div />
          </div>
        ))}
      </div>
    </Section>
  );
}
