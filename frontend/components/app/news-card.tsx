import Link from "next/link"
import { Button } from "../ui/button"
import { Card } from "../ui/card"
import { Table } from "@/types/strapi"
import { ApiNewNew } from "@/types/contentTypes"

type Props = {
  item: Table<ApiNewNew>
}

export default function NewsCard({ item }: Props) {
  return (
    <Card>
      {item.thumbnail && (
        <Link href={`/news/${item.documentId}`}>
          <img
            src={item.thumbnail.formats.medium.url}
            alt="Новость 1"
            className="rounded-t-xl w-full h-48 object-cover"
          />
        </Link>
      )}
      <div className="p-4">
        <Link href={`/news/${item.documentId}`}>
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
        </Link>
        <Link href={`/news/${item.documentId}`}>
          <Button>Читать далее</Button>
        </Link>
      </div>
    </Card>
  )
}
