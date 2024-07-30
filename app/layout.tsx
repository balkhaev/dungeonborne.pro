import { GeistSans } from "geist/font/sans"
import "./globals.css"
import { Metrika } from "@/components/utils/metrika"
import { Suspense } from "react"

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000"

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Dungeonborne - гайды, новости, блоги, форум",
  description:
    "Фанатский сайт о игре Dungeonborne - гайды пользователей, новости игры, форум для общения",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <Suspense>
        <Metrika />
      </Suspense>
      <body className="bg-background text-foreground">{children}</body>
    </html>
  )
}
