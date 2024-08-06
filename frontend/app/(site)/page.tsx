import Image from "next/image"
import heroImage from "./hero.png"
import NewsCard from "@/components/app/news-card"
import GuideCard from "@/components/app/guide-card"
import axios from "axios"
import { ApiNewNew } from "@/types/contentTypes"
import { Table } from "@/types/strapi"

export default async function HomePage() {
  const { data } = await axios.get(
    "http://localhost:1337/api/news?populate=thumbnail"
  )

  const news = data.data as Table<ApiNewNew>[]

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
              <NewsCard key={item.documentId} item={item} />
            ))}
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Популярные гайды</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GuideCard
              image="https://soveabqnhwtbhczxzwtn.supabase.co/storage/v1/object/public/dungeonborne/8f465dbe2ddaf1c6491b362e2cef6740.jpg"
              title="Как фармить золото"
              href="/guides/gold"
              description="Все что нужно знать новому игроку для фарма"
            />
            <GuideCard
              image="https://soveabqnhwtbhczxzwtn.supabase.co/storage/v1/object/public/dungeonborne/0.jpg"
              title="Эффекты сетов"
              href="/guides/sets"
              description="Описания всех эффектов от сетов"
            />
            <GuideCard
              image="https://soveabqnhwtbhczxzwtn.supabase.co/storage/v1/object/public/dungeonborne/b446b6c6b4d34b24a9526d7937d208ed.jpg"
              title="Реликвии"
              href="/guides/relics"
              description="Как получить все легендарные реликвии"
            />
            <GuideCard
              image="https://soveabqnhwtbhczxzwtn.supabase.co/storage/v1/object/public/dungeonborne/Dungeonborne-Hero-500.jpg"
              title="Мобы"
              href="/mobs"
              description="Бестиарий всех врагов и боссов в игре"
            />
          </div>
        </section>
      </main>
    </>
  )
}
