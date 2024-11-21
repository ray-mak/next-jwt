import LoginForm from "@/components/LoginForm"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24">
      <h1 className="text-4xl font-bold">Login/Signup</h1>
      <LoginForm />
    </main>
  )
}
