"use client"

import { signIn } from "next-auth/react"
import { Github, Mail, User } from "lucide-react"
import React, { use, useState } from "react"

type ProviderType = {
    name: string
    id: string
    icon: React.ReactElement
}

const providers: ProviderType[] = [
    { name: "Google", id: "google", icon: <Mail className="w-5 h-5" /> },
    { name: "GitHub", id: "github", icon: <Github className="w-5 h-5" /> },
    { name: "Demo User", id: "credentials", icon: <User className="w-5 h-5" /> },
]

export default function AuthProviders() {
    const [showtab, setshowTab] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div
            className="max-w-md mx-auto p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-900"
        >
            <h2 className="text-2xl font-bold text-center mb-6 text-white dark:text-gray-100">
                Choose your login
            </h2>
            <div className="flex flex-col text-white gap-3">
                {providers.map((p) =>
                    p.id === "credentials" ? (
                        <div key={p.id} className="flex flex-col gap-3">
                            {!showtab ? (
                                <button onClick={() => setshowTab(!showtab)} key={p.id} className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl border hover:bg-gray-100 dark:hover:bg-gray-800 transition ">
                                    {p.icon}
                                    {p.name}
                                </button>
                            ) : (
                                <div className="flex flex-col gap-3 rounded-2xl">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800"
                                    />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800"
                                    />
                                    <button
                                        onClick={()=>console.log("handleMe")}
                                        className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
                                    >
                                        Login
                                    </button>
                                    <button
                                        onClick={() => setshowTab(false)}
                                        className="text-sm text-gray-500 hover:underline"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <button key={p.id} className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl border hover:bg-gray-100 dark:hover:bg-gray-800 transition ">
                            {p.icon}
                            {p.name}
                        </button>
                    )
                )}
            </div>
            <p className="mt-6 text-xs text-gray-500 text-center">
                Powered by <span className="font-semibold">NextAuth.js</span>
            </p>
        </div>
    )
}
