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
import logo from "./logo.png"
import React from "react"
import AuthButton from "./auth-button"
import { ListItemLink } from "./list-item-link"
import axios from "axios"
import { Table } from "@/types/strapi"
import { ApiClassClass } from "@/types/contentTypes"

export default async function AppHeader() {
  const { data } = await axios.get("http://localhost:1337/api/classes")
  const classes = data.data as Table<ApiClassClass>[]

  return (
    <header className="bg-secondary py-4 px-6 shadow-md">
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
                  <ListItemLink href="/guides/gold" title="Фарм золота">
                    Узнай как фармить золото
                  </ListItemLink>
                  <ListItemLink href="/guides/sets" title="Эффекты сетов">
                    Описания всех эффектов от сетов
                  </ListItemLink>
                  <ListItemLink href="/guides/relics" title="Реликвии">
                    Как достать все 3 реликвии
                  </ListItemLink>
                  <ListItemLink href="/mobs" title="Мобы">
                    Описания всех мобов
                  </ListItemLink>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Классы</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.8fr_1fr]">
                  {classes?.map((item) => (
                    <ListItemLink
                      key={item.documentId}
                      href={`/classes/${item.slug}`}
                      title={item.name}
                    >
                      {item.description}
                    </ListItemLink>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* <AuthButton /> */}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
