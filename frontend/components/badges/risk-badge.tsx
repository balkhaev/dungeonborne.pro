import { Table } from "@/types/strapi"
import { Badge } from "../ui/badge"
import { ApiEnemyEnemy } from "@/types/contentTypes"

type Props = {
  risk: Table<ApiEnemyEnemy>["risk"]
}

const textMap = {
  high: "Высокий риск",
  normal: "Средний риск",
  low: "Низкий риск",
}

export default function RiskBadge({ risk }: Props) {
  return (
    <Badge variant="secondary" className="bg-slate-950 hover:bg-slate-900">
      {textMap[risk as keyof typeof textMap]}
    </Badge>
  )
}
