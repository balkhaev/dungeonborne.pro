import Link from "next/link"
import { Button } from "../ui/button"
import { Tables } from "@/database.types"

type Props = {
  item: Tables<"guides">
}

export default function GuideCard({ item }: Props) {
  return (
    <div className="bg-[#2b2b2b] rounded-lg shadow-md overflow-hidden">
      {item.image && (
        <Link href={`/guides/${item.id}`}>
          <img
            src={item.image}
            alt="Новость 1"
            className="w-full h-48 object-cover"
          />
        </Link>
      )}
      <div className="p-4">
        <Link href={`/guides/${item.id}`}>
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
        </Link>
        <p className="text-gray-400 mb-4">
          Узнайте, как быстро прокачать своего героя.
        </p>

        <Link href={`/guides/${item.id}`}>
          <Button>Читать гайд</Button>
        </Link>
      </div>
    </div>
  )
}
