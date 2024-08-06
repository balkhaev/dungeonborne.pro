import DropBadge from "@/components/badges/drop-badge"
import RiskBadge from "@/components/badges/risk-badge"
import { ApiEnemyEnemy } from "@/types/contentTypes"
import { Table } from "@/types/strapi"
import axios from "axios"

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mpgE29zNThH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default async function MobPage({ params: { slug } }: any) {
  const { data } = await axios.get(
    `http://localhost:1337/api/enemies?populate[0]=image&filters[slug][$eq]=${slug}`
  )
  const enemy = data.data[0] as Table<ApiEnemyEnemy>

  if (!enemy) {
    return null
  }

  return (
    <div className="grid gap-12">
      <section>
        <h2 className="text-3xl font-bold mb-4">{enemy.name}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            {enemy.image && (
              <img
                src={enemy.image.url || ""}
                alt="Огненный элементаль"
                className="w-full rounded-lg object-cover aspect-square"
              />
            )}
          </div>
          <div className="space-y-4">
            <p className="whitespace-pre-line">{enemy.description}</p>
            <div className="flex gap-2">
              <DropBadge drop={enemy.drop} />
              <RiskBadge risk={enemy.risk} />
            </div>
          </div>
        </div>
      </section>
      {/* <section>
          <h2 className="text-3xl font-bold mb-4">Видео с прохождением боя</h2>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </section> */}
      {/* <section>
          <h2 className="text-3xl font-bold mb-4">Гайды по прохождению</h2>
          <div className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img
                  src="/placeholder.svg"
                  alt="Тактика боя"
                  className="w-full rounded-lg object-cover aspect-video"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Тактика боя</h3>
                <p>
                  Для победы над огненным элементалем необходимо использовать
                  ледяные заклинания, чтобы охладить его пламя. Также
                  рекомендуется использовать тяжёлые доспехи, чтобы
                  минимизировать урон от его огненных атак.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img
                  src="/placeholder.svg"
                  alt="Рекомендуемое снаряжение"
                  className="w-full rounded-lg object-cover aspect-video"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Рекомендуемое снаряжение</h3>
                <p>
                  Для победы над огненным элементалем рекомендуется использовать
                  следующее снаряжение: ледяной посох, кольцо Огненного Духа,
                  тяжёлые доспехи из закалённой стали.
                </p>
              </div>
            </div>
          </div>
        </section> */}
    </div>
  )
}
