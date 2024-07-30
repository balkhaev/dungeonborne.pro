import { Tables } from "@/database.types"
import MobsCard from "./mobs-card"

type Props = {
  items: Tables<"mobs">[]
}

export default function MobsList({ items }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item) => (
        <MobsCard key={item.id} item={item} />
      ))}
    </div>
  )
}
