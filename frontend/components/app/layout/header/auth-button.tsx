"use client"

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ListItem } from "./list-item"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"

export default function AuthButton() {
  const { data } = useSession()

  const logout = async () => {
    await signOut()
    window.location.reload()
  }

  if (data?.user) {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger>{data?.user.email}</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr]">
            {/* <ListItemLink href="/profile" title="Профиль" /> */}
            <ListItem title="Выйти" onClick={logout} />
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    )
  }

  return (
    <Link href="/login" legacyBehavior passHref>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        Войти
      </NavigationMenuLink>
    </Link>
  )
}
