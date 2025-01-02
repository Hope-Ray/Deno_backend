import type { z } from "@hono/zod-openapi";

// eslint-disable-next-line ts/ban-ts-comment
export type ZodSchema =
  | z.ZodUnion<[z.ZodTypeAny, ...z.ZodTypeAny[]]>
  | z.AnyZodObject
  | z.ZodArray<z.AnyZodObject>;

import jsonContent from "./json-content.ts";

const jsonContentRequired = <T extends ZodSchema>(
  schema: T,
  description: string,
) => {
  return {
    ...jsonContent(schema, description),
    required: true,
  };
};

export default jsonContentRequired;
