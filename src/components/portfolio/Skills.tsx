import { useEffect, useRef, useState } from "react";
import * as Si from "react-icons/si";
import * as Fa from "react-icons/fa";
import { Section } from "./Section";
import { usePortfolio } from "@/hooks/use-portfolio";

function Icon({ name }: { name: string | null }) {
  if (!name) return null;
  const lib = name.startsWith("Si") ? Si : Fa;
  // @ts-expect-error dynamic lookup
  const Cmp = lib[name];
  return Cmp ? <Cmp size={28} /> : null;
}

function AnimatedBar({ value }: { value: number }) {
  const [w, setW] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setW(value);
          io.disconnect();
        }
      });
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return (
    <div ref={ref} className="h-2 w-full overflow-hidden rounded-full bg-secondary">
      <div
        className="h-full rounded-full bg-gradient-primary transition-[width] duration-1000 ease-out"
        style={{ width: `${w}%` }}
      />
    </div>
  );
}

export function Skills() {
  const { data } = usePortfolio();
  const skills = data?.skills ?? [];
  return (
    <Section
      id="skills"
      eyebrow="What I work with"
      title="Skills & Tools"
      description="The technologies I use to bring ideas to life."
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((s) => (
          <div
            key={s.id}
            className="group glass relative overflow-hidden rounded-2xl p-5 shadow-card transition-all hover:-translate-y-1.5 hover:shadow-glow"
          >
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-primary opacity-0 blur-2xl transition-opacity group-hover:opacity-30" />
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary">
                <Icon name={s.icon} />
              </div>
              <div>
                <p className="font-display font-semibold">{s.skill_name}</p>
                <p className="text-xs text-muted-foreground">{s.level}% proficiency</p>
              </div>
            </div>
            <div className="mt-4">
              <AnimatedBar value={s.level} />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
