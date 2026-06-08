import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const sendContactMail = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      name: z.string().min(1),
      email: z.string().email(),
      subject: z.string().max(150).optional(),
      message: z.string().min(5),
    }),
  )
  .handler(async ({ data }) => {
    const { sendContactEmail } = await import("../email.server");
    await sendContactEmail(data);
    return { ok: true };
  });
