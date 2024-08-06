"use client"

import React from "react"
import { SessionProvider as NextSessionProvider } from "next-auth/react"

type sessionProps = {
  children: React.ReactNode
}

export default function SessionProvider({ children }: sessionProps) {
  return <NextSessionProvider>{children}</NextSessionProvider>
}
