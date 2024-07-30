import Link from "next/link"
import { Button } from "../ui/button"
import { Tables } from "@/database.types"

type Props = Partial<Tables<"guides">> & { slug: string; description?: string }

export default function GuideCard({ image, title, slug, description }: Props) {
  return (
    <div className="bg-[#2b2b2b] rounded-lg shadow-md overflow-hidden">
      {image && (
        <Link href={`/guides/${slug}`}>
          <img
            src={image}
            alt="Новость 1"
            className="w-full h-48 object-cover"
          />
        </Link>
      )}
      <div className="p-4">
        <Link href={`/guides/${slug}`}>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
        </Link>
        <p className="text-gray-400 mb-4">{description}</p>

        <Link href={`/guides/${slug}`}>
          <Button>Читать гайд</Button>
        </Link>
      </div>
    </div>
  )
}
