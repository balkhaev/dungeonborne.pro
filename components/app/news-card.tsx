import Link from "next/link"
import { Button } from "../ui/button"
import { Tables } from "@/database.types"
import { Card } from "../ui/card"

type Props = {
  item: Tables<"news">
}

export default function NewsCard({ item }: Props) {
  return (
    <Card>
      {item.image && (
        <Link href={`/news/${item.id}`}>
          <img
            src={item.image}
            alt="Новость 1"
            className="rounded-t-xl w-full h-48 object-cover"
          />
        </Link>
      )}
      <div className="p-4">
        <Link href={`/news/${item.id}`}>
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
        </Link>
        <Link href={`/news/${item.id}`}>
          <Button>Читать далее</Button>
        </Link>
      </div>
    </Card>
  )
}
