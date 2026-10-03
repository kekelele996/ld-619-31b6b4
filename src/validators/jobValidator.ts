import { z } from "zod"; export const runOptionsSchema = z.object({ input: z.string(), profile: z.string().default("default"), output: z.string() });
