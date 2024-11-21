"use server"
import { createSession } from "@/lib/session"
import { redirect } from "next/navigation"
import { z } from "zod"

const testUser = {
  id: "1",
  email: "test@gmail.com",
  password: "password",
}

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
})

export async function login(prevState: any, formData: FormData) {
  const result = loginSchema.safeParse(Object.fromEntries(formData))

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    }
  }

  const { email, password } = result.data

  if (email !== testUser.email || password !== testUser.password) {
    return {
      errors: {
        email: ["Invalid email or password"],
      },
    }
  }

  await createSession(testUser.id)

  redirect("/dashboard")
}

export async function logout() {}
