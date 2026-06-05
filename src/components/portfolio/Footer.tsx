import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Anu Priya — Crafted with <FiHeart className="inline text-accent" /> and code.
        </p>
        <div className="flex items-center gap-2">
          {[
            { href: "https://github.com/Anu-priya12389", Icon: FiGithub, label: "GitHub" },
            { href: "https://www.linkedin.com/in/anupriya-v-a28210324/", Icon: FiLinkedin, label: "LinkedIn" },
            { href: "mailto:anupriyav38@gmail.com", Icon: FiMail, label: "Email" },
          ].map(({ href, Icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground hover:text-primary">
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
