import {z} from 'zod';

export const usernameValidation = z
.string()
.min(2, "Username must be at least 2 characters long")
.max(20, "Username cannot exceed 20 characters")
.regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special characters")


export const signupSchema = z.object({
  username: usernameValidation,
  email: z.string().email({"message": "Please enter a valid email address"}),
  password: z.string().min(6, {"message": "Password must be at least 6 characters long"})
})