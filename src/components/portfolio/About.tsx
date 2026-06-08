import { FiBookOpen, FiTarget, FiHeart } from "react-icons/fi";
import { Section } from "./Section";

const interests = [
  "Web Development",
  "Full Stack Development",
  "UI/UX Design",
  "Artificial Intelligence",
  "Learning New Technologies",
  "Problem Solving",
  "Software Development",
  "Continuous Skill Enhancement",
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title="My Story"
      description="A glimpse into who I am, where I'm from and where I'm headed."
    >
      <div className="grid gap-6 md:grid-cols-3">
        <Card icon={<FiBookOpen />} title="Professional Summary">
          I completed my schooling at <strong>St. Joseph School</strong> and{" "}
          <strong>Government Girls Higher Secondary School</strong>, where I secured top marks in
          Tamil, English and Computer Science. I also served as{" "}
          <strong>President of the English Literary Association</strong>, improving my leadership
          and communication skills. I am currently pursuing <strong>BCA</strong> and actively
          building my technical skills in web development, programming, and problem-solving —
          participating in symposiums, hackathons and technical events.
        </Card>

        <Card icon={<FiTarget />} title="Career Goal">
          To build a successful career as a <strong>Full Stack Developer</strong> by continuously
          improving my technical skills and creating innovative, user-friendly web applications. I
          aim to contribute to impactful projects and grow into a skilled software engineer.
        </Card>

        <Card icon={<FiHeart />} title="Interests">
          <ul className="mt-2 flex flex-wrap gap-2">
            {interests.map((i) => (
              <li
                key={i}
                className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-foreground/80"
              >
                {i}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}

function Card({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="gradient-border glass relative rounded-2xl p-6 shadow-card transition-transform hover:-translate-y-1">
      <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
        {icon}
      </div>
      <h3 className="font-display text-xl font-semibold">{title}</h3>
      <div className="mt-3 text-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}
