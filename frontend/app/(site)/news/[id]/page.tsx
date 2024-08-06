import { remark } from "remark"
import html from "remark-html"
import "./style.css"
import axios from "axios"
import { Table } from "@/types/strapi"
import { ApiNewNew } from "@/types/contentTypes"

export default async function NewsPage({ params: { id } }: any) {
  const { data } = await axios.get(
    `http://localhost:1337/api/news/${id}?populate=thumbnail`
  )

  const news = data.data as Table<ApiNewNew>

  if (!news || !news.content) {
    return null
  }

  const processedContent = await remark().use(html).process(news.content)
  const contentHtml = processedContent.toString()

  return (
    <div className="text-white max-w-4xl w-full mx-auto">
      <header className="py-8">
        <h1 className="text-3xl font-bold mb-2">{news.title}</h1>
        {/* <p className="text-lg text-[#b3b3b3]">
          Погрузитесь в мир темного фэнтези и исследуйте таинственные глубины
          подземелья.
        </p> */}
      </header>
      {news.thumbnail.url && (
        <img src={news.thumbnail.url} className="w-full" />
      )}
      <main
        className="py-6 markdown"
        dangerouslySetInnerHTML={{
          __html: contentHtml,
        }}
      ></main>
    </div>
  )
}
