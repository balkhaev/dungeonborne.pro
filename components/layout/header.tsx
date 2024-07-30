import Image from "next/image"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { createClient } from "@/utils/supabase/server"
import logo from "./logo.png"
import React from "react"
import { cn } from "@/lib/utils"

export default async function AppHeader() {
  const supabase = createClient()
  const { data } = await supabase
    .from("classes")
    .select("id, name, description, slug")

  return (
    <header className="bg-muted py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="items-center gap-4">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Dungeonborne.pro логотип"
              className="h-10 w-10"
            />
            <h1 className="text-2xl font-bold text-[#d3d3d3]">ungeonborne</h1>
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <Link href="/maps" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Карты
              </NavigationMenuLink>
            </Link>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Гайды</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.8fr_1fr]">
                  {/* <ListItem href="/starter" title="Новичку">
                      Все что нужно знать новому игроку
                    </ListItem> */}
                  <ListItem href="/guides/gold" title="Фарм золота">
                    Как фармить золото
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Классы</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.8fr_1fr]">
                  {data?.map((item) => (
                    <ListItem
                      key={item.id}
                      href={`/classes/${item.slug}`}
                      title={item.name}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
