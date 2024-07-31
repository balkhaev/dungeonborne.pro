import { createClient } from "@/utils/supabase/server"
import { remark } from "remark"
import html from "remark-html"
import "./style.css"

export default async function NewsPage({ params: { id } }: any) {
  const supabase = createClient()
  const { data } = await supabase.from("news").select("*").eq("id", id).single()

  if (!data || !data.content) {
    return null
  }

  const processedContent = await remark().use(html).process(data.content)
  const contentHtml = processedContent.toString()

  return (
    <div className="text-white max-w-4xl w-full mx-auto">
      <header className="py-8">
        <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
        {/* <p className="text-lg text-[#b3b3b3]">
          Погрузитесь в мир темного фэнтези и исследуйте таинственные глубины
          подземелья.
        </p> */}
      </header>
      {data.image && <img src={data.image} className="w-full" />}
      <main
        className="py-6 markdown"
        dangerouslySetInnerHTML={{
          __html: contentHtml,
        }}
      ></main>
    </div>
  )
}
