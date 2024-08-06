import { Table } from "@/types/strapi"
import MobsCard from "./mobs-card"
import { ApiEnemyEnemy } from "@/types/contentTypes"

type Props = {
  items: Table<ApiEnemyEnemy>[]
}

export default function MobsList({ items }: Props) {
  return (
    <div className="grid grid-cols-4 gap-6">
      {items.map((item) => (
        <MobsCard key={item.documentId} {...item} />
      ))}
    </div>
  )
}
