import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Section } from "./Section";
import { usePortfolio } from "@/hooks/use-portfolio";
import { optimizedImage, srcSet } from "@/lib/img";

// Card renders at ~400px wide on mobile up to ~520px on large viewports.
const CARD_WIDTHS = [400, 600, 900, 1200];
const CARD_ASPECT_H = 250; // 16:10 of 400

const gradients = [
  "from-indigo-500/30 to-fuchsia-500/30",
  "from-rose-500/30 to-amber-500/30",
  "from-emerald-500/30 to-cyan-500/30",
];

export function Projects() {
  const { data } = usePortfolio();
  const items = data?.projects ?? [];
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Projects"
      description="A snapshot of things I've built — from college sites to interactive web apps."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((p, idx) => (
          <article
            key={p.id}
            className="group glass relative flex flex-col overflow-hidden rounded-3xl shadow-card transition-all hover:-translate-y-1.5 hover:shadow-glow"
          >
            <div
              className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${gradients[idx % gradients.length]}`}
            >
              {p.image_url ? (
                <img
                  src={optimizedImage(p.image_url, 600, { height: 375 })}
                  srcSet={srcSet(p.image_url, CARD_WIDTHS, CARD_ASPECT_H)}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  alt={p.title}
                  width={600}
                  height={375}
                  loading={idx === 0 ? "eager" : "lazy"}
                  fetchPriority={idx === 0 ? "high" : "auto"}
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="grid h-full w-full place-items-center">
                  <span className="font-display text-5xl font-bold text-gradient drop-shadow-md">
                    {p.title
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <h3 className="font-display text-xl font-semibold">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {(p.technologies ?? []).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-2 pt-3">
                {p.github_url && (
                  <a
                    href={p.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card/60 px-3 py-2 text-sm font-medium transition-colors hover:bg-card"
                  >
                    <FiGithub /> Code
                  </a>
                )}
                {p.live_url && (
                  <a
                    href={p.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
                  >
                    <FiExternalLink /> Live
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
