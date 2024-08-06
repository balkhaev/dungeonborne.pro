import Link from "next/link"
import { Button } from "../ui/button"
import { Card } from "../ui/card"
import { Table } from "@/types/strapi"
import { ApiGuideGuide } from "@/types/contentTypes"

type Props = Partial<Table<ApiGuideGuide>> & {
  href: string
  description?: string
  image?: string
}

export default function GuideCard({ image, title, href, description }: Props) {
  return (
    <Card>
      {image && (
        <Link href={href}>
          <img
            src={image}
            alt="Новость 1"
            className="rounded-t-xl w-full h-48 object-cover"
          />
        </Link>
      )}
      <div className="p-4">
        <Link href={href}>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
        </Link>
        <p className="text-gray-400 mb-4">{description}</p>

        <Link href={href}>
          <Button>Читать гайд</Button>
        </Link>
      </div>
    </Card>
  )
}
