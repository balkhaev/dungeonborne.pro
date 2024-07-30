import { Tables } from "@/database.types"
import { Badge } from "../ui/badge"

type Props = {
  drop: Tables<"mobs">["drop"]
}

const textMap = {
  high: "Хороший дроп",
  normal: "Средний дроп",
  low: "Плохой дроп",
}

export default function DropBadge({ drop }: Props) {
  return (
    <Badge variant="secondary" className="bg-pink-950 hover:bg-pink-900">
      {textMap[drop]}
    </Badge>
  )
}
