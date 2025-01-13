import { z } from "zod";

const phoneNumberRegex = /^\+62\s\d{10,15}$/;

export const formRegisterSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Name must be at least 3 characters long." })
      .max(50, { message: "Name cannot exceed 50 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    password: z.string().min(8, { message: "Please enter a valid password." }),
    confirmPassword: z
      .string()
      .min(8, { message: "Please confirm your password." }),
    address: z
      .string()
      .min(12, { message: "Address must be at least 12 characters long." })
      .max(65, { message: "Address cannot exceed 65 characters." }),
    phoneNumber: z
      .string()
      .regex(phoneNumberRegex, {
        message: "Phone number must be in the format +62 XXXXXXXXXX",
      })
      .min(10),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Confirmation password  must match with original password",
        path: ["confirmPassword"],
      });
    }
  });

export type FormRegisterFields = z.infer<typeof formRegisterSchema>;
