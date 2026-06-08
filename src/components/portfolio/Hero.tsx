import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import heroImg from "@/assets/anupriya-hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden bg-hero">
      {/* Floating blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/30 blur-3xl blob-anim" />
        <div
          className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-accent/30 blur-3xl blob-anim"
          style={{ animationDelay: "-5s" }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-primary-glow/25 blur-3xl blob-anim"
          style={{ animationDelay: "-9s" }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pt-36 pb-24 md:grid-cols-2 md:pt-44">
        <div className="space-y-7">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" /> Available for
            opportunities
          </span>

          <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
            Hi, I'm <span className="text-gradient">Anu Priya</span>
          </h1>
          <p className="text-xl font-medium text-foreground/80 md:text-2xl">
            BCA Student · Aspiring{" "}
            <span className="text-gradient font-semibold">Full Stack Developer</span>
          </p>
          <p className="max-w-xl text-base text-muted-foreground md:text-lg">
            Passionate about building modern web applications, solving real-world problems, and
            continuously learning emerging technologies.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <FiArrowDown className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-6 py-3 font-semibold text-foreground backdrop-blur transition-colors hover:bg-card"
            >
              Contact Me
            </a>
          </div>

          <ul className="flex items-center gap-3 pt-3">
            {[
              { href: "https://github.com/Anu-priya12389", label: "GitHub", Icon: FiGithub },
              {
                href: "https://www.linkedin.com/in/anupriya-v-a28210324/",
                label: "LinkedIn",
                Icon: FiLinkedin,
              },
              { href: "mailto:anupriyav38@gmail.com", label: "Email", Icon: FiMail },
            ].map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="glass grid h-11 w-11 place-items-center rounded-xl text-foreground transition-transform hover:-translate-y-0.5 hover:text-primary"
                >
                  <Icon size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto">
          <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-primary opacity-30 blur-3xl" />
          <div className="float-anim">
            <div className="relative aspect-square w-72 overflow-hidden rounded-[2.25rem] border border-border/60 shadow-glow sm:w-96 md:w-[26rem]">
              <img
                src={heroImg}
                alt="Anu Priya — BCA Student and aspiring Full Stack Developer"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20" />
            </div>
          </div>
          <div className="glass absolute -bottom-6 -left-6 rounded-2xl px-4 py-3 shadow-soft">
            <p className="text-xs text-muted-foreground">CGPA</p>
            <p className="font-display text-2xl font-bold text-gradient">9.0</p>
          </div>
          <div className="glass absolute -top-4 -right-4 rounded-2xl px-4 py-3 shadow-soft">
            <p className="text-xs text-muted-foreground">Projects</p>
            <p className="font-display text-2xl font-bold text-gradient">3+</p>
          </div>
        </div>
      </div>

      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <div className="flex flex-col items-center gap-1 text-xs">
          <span>Scroll</span>
          <span className="h-8 w-5 rounded-full border border-muted-foreground/40 relative">
            <span className="absolute left-1/2 top-1.5 h-1.5 w-1 -translate-x-1/2 rounded-full bg-muted-foreground animate-bounce" />
          </span>
        </div>
      </a>
    </section>
  );
}
