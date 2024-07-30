import Link from "next/link"
import { Button } from "../ui/button"
import { Tables } from "@/database.types"

type Props = {
  item: Tables<"news">
}

export default function NewsCard({ item }: Props) {
  return (
    <div className="bg-[#2b2b2b] rounded-lg shadow-md overflow-hidden">
      {item.image && (
        <Link href={`/news/${item.id}`}>
          <img
            src={item.image}
            alt="Новость 1"
            className="w-full h-48 object-cover"
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
    </div>
  )
}
