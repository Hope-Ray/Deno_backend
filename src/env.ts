import { ZodError } from "zod";
import { z } from "zod";

const EnvSchema = z.object({
  PORT: z.coerce.number().default(5000),
  DENO_ENV: z.string().default("development"),
  LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug", "trace"]),
});

type Env = z.infer<typeof EnvSchema>;

let env: Env;

try {
  env = EnvSchema.parse({
    PORT: Deno.env.get("PORT"),
    DENO_ENV: Deno.env.get("DENO_ENV"),
    LOG_LEVEL: Deno.env.get("LOG_LEVEL"),
  });
} catch (e) {
  const error = e as ZodError;
  console.error("❌ Invalid ENV:", error.flatten().fieldErrors);
  Deno.exit(1);
}

export default env;
