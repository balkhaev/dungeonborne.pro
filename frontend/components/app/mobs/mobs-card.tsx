/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UapFbqNdvsX
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Card, CardTitle } from "../../ui/card"
import RiskBadge from "../../badges/risk-badge"
import DropBadge from "../../badges/drop-badge"
import Link from "next/link"
import { Table } from "@/types/strapi"
import { ApiEnemyEnemy } from "@/types/contentTypes"

type Props = Table<ApiEnemyEnemy>

export default function MobsCard({
  name,
  slug,
  risk,
  drop,
  image,
  description,
}: Props) {
  return (
    <Card>
      <Link href={`/mobs/${slug}`}>
        <CardTitle className="border-b-2 p-4 hover:bg-neutral-800 rounded-t-xl whitespace-nowrap text-ellipsis overflow-hidden">
          {name}
        </CardTitle>
      </Link>
      <div className="p-2 flex gap-2">
        <RiskBadge risk={risk} />
        <DropBadge drop={drop} />
      </div>
      {image && (
        <Link href={`/mobs/${slug}`}>
          <img
            src={image.url || ""}
            className="object-cover w-full aspect-[5/6]"
          />
        </Link>
      )}
      <div className="p-4">
        <div className="line-clamp-4">{description}</div>
      </div>
    </Card>
  )
}
