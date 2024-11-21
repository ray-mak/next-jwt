"use client"
import { login } from "@/app/actions/actions"
import { useActionState } from "react"
import { useFormStatus } from "react-dom"

const LoginForm = () => {
  const [state, loginAction] = useActionState(login, undefined)
  return (
    <form
      action={loginAction}
      className="border flex flex-col gap-4 p-4 max-w-[400px]"
    >
      <p>Login Form</p>
      {state?.errors?.email && (
        <p className="text-red-500"> {state.errors.email}</p>
      )}
      {state?.errors?.password && (
        <p className="text-red-500"> {state.errors.password}</p>
      )}

      <label htmlFor="email" className="flex flex-col">
        Email
        <input type="email" name="email" id="email" className="border" />
      </label>

      <label htmlFor="password" className="flex flex-col">
        Password
        <input
          type="password"
          name="password"
          id="password"
          className="border"
        />
      </label>

      <SubmitButton />
    </form>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      disabled={pending}
      type="submit"
      className="bg-blue-500 text-white p-2 hover:bg-blue-600"
    >
      Login
    </button>
  )
}

export default LoginForm
