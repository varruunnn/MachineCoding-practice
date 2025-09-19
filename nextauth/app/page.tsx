import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "../app/api/auth/[...nextauth]/route";
import Navbar from "./components/Navbar"

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect("/dashboard")
  }

  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <section className="flex flex-1 items-center justify-center text-center text-white">
        <div>
          <h1 className="text-5xl font-extrabold mb-6">
            Welcome to NextAuth Challenge
          </h1>
          <p className="text-lg mb-8 text-gray-200">
            Practice SSR authentication with multiple providers, styled with
            TailwindCSS.
          </p>
          <a
            href="/auth/signin"
            className="px-6 py-3 rounded-xl bg-white text-indigo-600 font-semibold hover:bg-gray-200 transition"
          >
            Get Started
          </a>
        </div>
      </section>
    </main>
  )
}
