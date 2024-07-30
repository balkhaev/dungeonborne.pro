import MobsList from "@/components/mobs/mobs-list"
import { createClient } from "@/utils/supabase/server"

export default async function MobsPage() {
  const supabase = createClient()
  const { data } = await supabase.from("mobs").select("*")

  if (!data) {
    return null
  }

  return <MobsList items={data} />
}
