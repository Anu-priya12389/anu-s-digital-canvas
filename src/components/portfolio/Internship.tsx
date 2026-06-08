import { FiBriefcase, FiCalendar } from "react-icons/fi";
import { Section } from "./Section";
import { usePortfolio } from "@/hooks/use-portfolio";

export function Internship() {
  const { data } = usePortfolio();
  const items = data?.internships ?? [];
  return (
    <Section
      id="internship"
      eyebrow="Experience"
      title="Internship"
      description="Real-world experience building production-grade applications."
    >
      <div className="mx-auto grid max-w-4xl gap-6">
        {items.map((i) => (
          <div
            key={i.id}
            className="gradient-border glass relative overflow-hidden rounded-3xl p-7 shadow-card md:p-10"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                <FiBriefcase size={28} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-2xl font-semibold">{i.role}</h3>
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                    {i.company}
                  </span>
                </div>
                <p className="mt-2 inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <FiCalendar /> {i.start_date} — {i.end_date}
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">{i.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["React", "Node.js", "MySQL", "REST APIs", "Git"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
