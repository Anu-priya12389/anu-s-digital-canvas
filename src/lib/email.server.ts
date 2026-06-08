import process from "node:process";
import nodemailer from "nodemailer";

export type ContactMessage = {
  name: string;
  email: string;
  subject?: string | null;
  message: string;
};

function getMailConfig() {
  const adminEmail = process.env.ADMIN_EMAIL;
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const from = process.env.SMTP_FROM;
  const secure = process.env.SMTP_SECURE === "true";

  const missing = [
    ...(!adminEmail ? ["ADMIN_EMAIL"] : []),
    ...(!host ? ["SMTP_HOST"] : []),
    ...(!port ? ["SMTP_PORT"] : []),
    ...(!user ? ["SMTP_USER"] : []),
    ...(!pass ? ["SMTP_PASSWORD"] : []),
  ];

  if (missing.length > 0) {
    throw new Error(`Missing email environment variable(s): ${missing.join(", ")}`);
  }

  return {
    adminEmail,
    transport: {
      host,
      port: Number(port),
      secure,
      auth: { user, pass },
    },
    from: from ?? `Portfolio Contact <${adminEmail}>`,
  };
}

export async function sendContactEmail(contact: ContactMessage) {
  const { adminEmail, transport, from } = getMailConfig();

  const transporter = nodemailer.createTransport(transport);

  const subject = `New contact from ${contact.name}`;
  const html = `
    <p><strong>Name:</strong> ${contact.name}</p>
    <p><strong>Email:</strong> ${contact.email}</p>
    ${contact.subject ? `<p><strong>Subject:</strong> ${contact.subject}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${contact.message.replace(/\n/g, "<br />")}</p>
  `;

  await transporter.sendMail({
    from,
    to: adminEmail,
    subject,
    text: `Name: ${contact.name}\nEmail: ${contact.email}\n${
      contact.subject ? `Subject: ${contact.subject}\n` : ""
    }Message:\n${contact.message}`,
    html,
  });
}
