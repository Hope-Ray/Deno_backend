import { ZodError } from "zod";
import { z } from "zod";

const EnvSchema = z
  .object({
    PORT: z.coerce.number().default(5000),
    DENO_ENV: z.string().default("development"),
    LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug", "trace"]),
    DATABASE_URL: z.string().url(),
    DATABASE_AUTH_TOKEN: z.string().optional(),
  })
  .superRefine((input, ctx) => {
    if (input.DENO_ENV === "production" && !input.DATABASE_AUTH_TOKEN) {
      ctx.addIssue({
        code: z.ZodIssueCode.invalid_type,
        expected: "string",
        received: "undefined",
        path: ["DATABASE_AUTH_TOKEN"],
        message: "Must be set when production is environment",
      });
    }
  });

type Env = z.infer<typeof EnvSchema>;

let env: Env;

try {
  env = EnvSchema.parse({
    PORT: Deno.env.get("PORT"),
    DENO_ENV: Deno.env.get("DENO_ENV"),
    LOG_LEVEL: Deno.env.get("LOG_LEVEL"),
    DATABASE_URL: Deno.env.get("DATABASE_URL"),
    DATABASE_AUTH_TOKEN: Deno.env.get("DATABASE_AUTH_TOKEN"),
  });
} catch (e) {
  const error = e as ZodError;
  console.error("❌ Invalid ENV:1", error.flatten().fieldErrors);
  Deno.exit(1);
}

export default env;
