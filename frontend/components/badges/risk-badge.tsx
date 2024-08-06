import { Tables } from "@/database.types"
import { Badge } from "../ui/badge"

type Props = {
  risk: Tables<"mobs">["risk"]
}

const textMap = {
  high: "Высокий риск",
  normal: "Средний риск",
  low: "Низкий риск",
}

export default function RiskBadge({ risk }: Props) {
  return (
    <Badge variant="secondary" className="bg-slate-950 hover:bg-slate-900">
      {textMap[risk]}
    </Badge>
  )
}
