import MobsList from "@/components/app/mobs/mobs-list"
import { ApiEnemyEnemy } from "@/types/contentTypes"
import { Table } from "@/types/strapi"
import axios from "axios"

export default async function MobsPage() {
  const { data } = await axios.get(
    "http://localhost:1337/api/enemies?populate[0]=image"
  )
  const enemies = data.data as Table<ApiEnemyEnemy>[]

  if (!data) {
    return null
  }

  return <MobsList items={enemies} />
}
