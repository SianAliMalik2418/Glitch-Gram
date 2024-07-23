import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().trim(),
});


export type LoginSchemaType = {
  email : string,
  password : string
}