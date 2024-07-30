import { Tables } from "@/database.types"
import { Card, CardContent, CardHeader } from "../ui/card"

type Props = {
  item: Tables<"mobs">
}

export default function MobsCard({ item }: Props) {
  return (
    <Card>
      <CardHeader>
        <div className="text-xl font-bold">{item.name}</div>
      </CardHeader>
      {item.image && (
        <img src={item.image} className="w-full h-80 object-cover" />
      )}
      <CardContent className="mt-4">{item.comment}</CardContent>
    </Card>
  )
}
