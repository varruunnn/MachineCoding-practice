"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { LogIn, LogOut } from "lucide-react"

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <h1 className="font-bold text-lg">NextAuth Challenge</h1>
      {session ? (
        <button
          onClick={() => signOut()}
          className="flex items-center gap-2 px-3 py-1 rounded bg-red-500 hover:bg-red-600"
        >
          <LogOut className="w-4 h-4" /> Sign out
        </button>
      ) : (
        <button
          onClick={() => signIn()}
          className="flex items-center gap-2 px-3 py-1 rounded bg-green-500 hover:bg-green-600"
        >
          <LogIn className="w-4 h-4" /> Sign in
        </button>
      )}
    </nav>
  )
}
