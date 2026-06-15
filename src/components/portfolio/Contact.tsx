import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { FiMail, FiSend, FiGithub, FiLinkedin, FiCheckCircle } from "react-icons/fi";
import { Section } from "./Section";
import { supabase } from "@/integrations/supabase/client";
import { usePortfolio } from "@/hooks/use-portfolio";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().max(150).optional(),
  message: z.string().trim().min(5, "Message is too short").max(2000),
});
type FormData = z.infer<typeof schema>;

export function Contact() {
  const [done, setDone] = useState(false);
  const { data: portfolio } = usePortfolio();
  const profile = portfolio?.profile ?? null;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values: FormData) => {
    const { error } = await supabase.from("contacts").insert({
      name: values.name,
      email: values.email,
      subject: values.subject ?? null,
      message: values.message,
    });
    if (error) {
      toast.error("Couldn't send your message. Please try again.");
      return;
    }
    toast.success("Message sent! I'll get back to you soon.");
    setDone(true);
    reset();
    setTimeout(() => setDone(false), 4000);
  };

  return (
    <Section
      id="contact"
      eyebrow="Let's connect"
      title="Get in Touch"
      description="Have a project, opportunity or just want to say hi? Drop a message."
    >
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          <InfoCard
            icon={<FiMail />}
            label="Email"
            value={(profile as any)?.email ?? "anupriyav38@gmail.com"}
            href={`mailto:${(profile as any)?.email ?? "anupriyav38@gmail.com"}`}
          />
          <InfoCard
            icon={<FiLinkedin />}
            label="LinkedIn"
            value={(profile as any)?.linkedin_url ? new URL((profile as any).linkedin_url).pathname.replace(/^\//, "") : "anupriya-v"}
            href={(profile as any)?.linkedin_url ?? "https://www.linkedin.com/in/anupriya-v-a28210324/"}
          />
          <InfoCard
            icon={<FiGithub />}
            label="GitHub"
            value={(profile as any)?.github_url ? new URL((profile as any).github_url).pathname.replace(/^\//, "") : "Anu-priya12389"}
            href={(profile as any)?.github_url ?? "https://github.com/Anu-priya12389"}
          />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="glass space-y-4 rounded-3xl p-6 shadow-card lg:col-span-3 md:p-8"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Name" error={errors.name?.message}>
              <input {...register("name")} className="input" placeholder="Your name" />
            </Field>
            <Field label="Email" error={errors.email?.message}>
              <input
                {...register("email")}
                type="email"
                className="input"
                placeholder="you@example.com"
              />
            </Field>
          </div>
          <Field label="Subject" error={errors.subject?.message}>
            <input {...register("subject")} className="input" placeholder="What is it about?" />
          </Field>
          <Field label="Message" error={errors.message?.message}>
            <textarea
              {...register("message")}
              rows={5}
              className="input resize-y"
              placeholder="Write your message here..."
            />
          </Field>
          <button
            type="submit"
            disabled={isSubmitting}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            {done ? (
              <>
                <FiCheckCircle /> Sent
              </>
            ) : (
              <>
                {isSubmitting ? "Sending..." : "Send Message"}{" "}
                <FiSend className="transition-transform group-hover:translate-x-0.5" />
              </>
            )}
          </button>
        </form>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: var(--color-background);
          border: 1px solid var(--color-border);
          border-radius: 0.75rem;
          padding: 0.7rem 0.9rem;
          font-size: 0.95rem;
          color: var(--color-foreground);
          outline: none;
          transition: border-color .2s, box-shadow .2s;
        }
        .input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 4px color-mix(in oklab, var(--color-primary) 18%, transparent);
        }
      `}</style>
    </Section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

function InfoCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="glass flex items-center gap-4 rounded-2xl p-4 shadow-card transition-transform hover:-translate-y-0.5"
    >
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="truncate font-medium">{value}</p>
      </div>
    </a>
  );
}
