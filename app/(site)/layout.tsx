import AppHeader from "@/components/layout/header"
import React from "react"

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/x1Ju3Ixqhrb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default async function DefaulyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="dark text-white min-h-screen flex flex-col">
      <AppHeader />
      <div className="container mx-auto py-8">{children}</div>
      <footer className="bg-secondary py-6 mt-auto">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-gray-400">
            <span className="text-gray-400">В разработке с 29.07.2024</span>{" "}
            &copy; 2024{" "}
            <a
              className="underline"
              target="_blank"
              href="https://t.me/balkhaev"
            >
              balkhaev
            </a>
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#9b59b6] hover:text-[#8e44ad]">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.47 2 2 6.47 2 12C2 16.53 5.11 20.36 9.35 21.5C9.85 21.58 10 21.27 10 21C10 20.77 10 20.14 10 19.31C7 19.91 6.47 17.77 6.47 17.77C5.97 16.54 5.27 16.24 5.27 16.24C4.32 15.59 5.35 15.61 5.35 15.61C6.4 15.69 6.94 16.68 6.94 16.68C7.79 18.09 9.12 17.66 10.04 17.38C10.12 16.71 10.37 16.23 10.63 15.96C8.27 15.69 5.82 14.6 5.82 10.75C5.82 9.51 6.23 8.47 6.97 7.65C6.87 7.38 6.44 6.32 7.07 4.95C7.07 4.95 8.27 4.66 10 5.92C10.79 5.67 11.62 5.55 12.44 5.55C13.26 5.55 14.09 5.67 14.88 5.92C16.61 4.66 17.81 4.95 17.81 4.95C18.44 6.32 18.01 7.38 17." />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
