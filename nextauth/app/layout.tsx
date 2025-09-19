import "./globals.css"
import type { Metadata } from "next"
import Providers from "./components/Providers"

export const metadata: Metadata = {
  title: "NextAuth Challenge",
  description: "Practice NextAuth with SSR and Tailwind",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
