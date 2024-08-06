import { Table } from "@/types/strapi"
import { Badge } from "../ui/badge"
import { ApiEnemyEnemy } from "@/types/contentTypes"

type Props = {
  drop: Table<ApiEnemyEnemy>["drop"]
}

const textMap = {
  high: "Хороший дроп",
  normal: "Средний дроп",
  low: "Плохой дроп",
}

export default function DropBadge({ drop }: Props) {
  return (
    <Badge variant="secondary" className="bg-pink-950 hover:bg-pink-900">
      {textMap[drop as keyof typeof textMap]}
    </Badge>
  )
}
