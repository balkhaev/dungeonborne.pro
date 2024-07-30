import Image from "next/image"
import heroImage from "./hero.png"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import NewsCard from "@/components/app/news-card"
import GuideCard from "@/components/app/guide-card"
import { createClient } from "@/utils/supabase/server"

export default async function HomePage() {
  const supabase = createClient()

  const { data: news } = await supabase.from("news").select("*")
  const { data: guides } = await supabase.from("guides").select("*")

  return (
    <>
      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#2b2b2b] rounded-lg shadow-md overflow-hidden">
            <Image
              src={heroImage}
              alt="Hero"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold">
              Добро пожаловать на Dungenborne.pro!
            </h2>
            <p className="text-gray-400">
              Фанатский сайт русскоязычного сообщества Dungenborne.
              Разрабатывается с исключительной любовью к игре, игрокам и
              разработчикам. Пишите свои пожелания по сайту в тг{" "}
              <a
                target="_blank"
                className="underline"
                href="https://t.me/balkhaev"
              >
                @balkhaev
              </a>
              .
            </p>
          </div>
        </div>
      </section>
      <main className="container mx-auto py-8 px-0">
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Последние новости</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news?.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Популярные гайды</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides?.map((item) => (
              <GuideCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
