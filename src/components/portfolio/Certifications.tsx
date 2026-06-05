import { FiExternalLink, FiAward } from "react-icons/fi";
import { Section } from "./Section";
import { usePortfolio } from "@/hooks/use-portfolio";

export function Certifications() {
  const { data } = usePortfolio();
  const items = data?.certifications ?? [];
  return (
    <Section id="certifications" eyebrow="Continuous learning" title="Certifications" description="Courses and credentials earned along the way.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((c) => (
          <a
            key={c.id}
            href={c.certificate_url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass relative flex flex-col gap-3 overflow-hidden rounded-2xl p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-accent text-accent-foreground">
              <FiAward />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-semibold leading-snug">{c.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
            </div>
            <div className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
              View certificate <FiExternalLink />
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
