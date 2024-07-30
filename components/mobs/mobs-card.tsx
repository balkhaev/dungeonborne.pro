import { Tables } from "@/database.types"
import { Card, CardContent, CardHeader } from "../ui/card"

type Props = {
  item: Tables<"mobs">
}

export default function MobsCard({ item }: Props) {
  return (
    <Card>
      <CardHeader>{item.name}</CardHeader>
      {item.image && <img src={item.image} className="w-full" />}
      <CardContent>{item.comment}</CardContent>
    </Card>
  )
}
