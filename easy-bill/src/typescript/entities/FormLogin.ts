import { z } from "zod";

export const formLoginSchema = z.object({
  // name: z
  //   .string()
  //   .min(3, { message: "Name must be at least 3 characters long." })
  //   .max(50, { message: "Name cannot exceed 50 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(8, { message: "Please enter a valid password."})
});

export type FormLoginFields = z.infer<typeof formLoginSchema>;
