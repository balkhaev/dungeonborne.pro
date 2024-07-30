import { createClient } from "@/utils/supabase/server"

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/SjEcyysnaMl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default async function WarClassPage({ params: { slug } }: any) {
  const supabase = createClient()
  const { data } = await supabase
    .from("classes")
    .select("*")
    .eq("slug", slug)
    .single()

  if (!data) {
    return null
  }

  const { data: skills } = await supabase
    .from("skills")
    .select("*")
    .eq("class", data.id)

  return (
    <div className="grid gap-8">
      <section>
        <div className="flex items-center gap-4">
          {data.logo && <img src={data.logo} className="w-24 h-24" />}
          <h1 className="text-3xl font-bold">{data.name}</h1>
        </div>
        <p className="text-muted-foreground mt-4">{data.description}</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold">Характеристики</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-4 text-center">
          <div className="bg-muted rounded-lg p-4">
            <div className="text-6xl font-bold">{data.strength}</div>
            <h3 className="text-lg font-bold">Сила</h3>
            <p className="text-sm text-muted-foreground">
              Увеличивает физический урон
            </p>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <div className="text-6xl font-bold">{data.agility}</div>
            <h3 className="text-lg font-bold">Ловкость</h3>
            <p className="text-sm text-muted-foreground">
              Увеличивает урон от крит атак и скорость движения
            </p>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <div className="text-6xl font-bold">{data.stamina}</div>
            <h3 className="text-lg font-bold">Выносливость</h3>
            <p className="text-sm text-muted-foreground">
              Увеличивает здоровье и сопротивления
            </p>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <div className="text-6xl font-bold">{data.intelligence}</div>
            <h3 className="text-lg font-bold">Интеллект</h3>
            <p className="text-sm text-muted-foreground">
              Увеличивает стихийный урон
            </p>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <div className="text-6xl font-bold">{data.volition}</div>
            <h3 className="text-lg font-bold">Воля</h3>
            <p className="text-sm text-muted-foreground">
              Добавляет урон навыкам
            </p>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <div className="text-6xl font-bold">{data.faith}</div>
            <h3 className="text-lg font-bold">Вера</h3>
            <p className="text-sm text-muted-foreground">
              Увеличивает бонус к щиту и лечению
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold">Способности</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {skills?.map((item) => (
            <div className="bg-muted rounded-lg p-4">
              <div className="flex gap-4">
                {item.image && <img src={item.image} className="w-24 h-24" />}
                <div>
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* <section>
        <h2 className="text-2xl font-bold">Билды</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-muted rounded-lg p-4">
            <h3 className="text-lg font-bold">Танк</h3>
            <p className="text-muted-foreground">
              Этот билд фокусируется на максимальной выживаемости и защите.
              Основные характеристики: Выносливость, Сила, Ловкость.
            </p>
            <p className="text-muted-foreground mt-2">
              Ключевые способности: Защитная стойка, Боевой клич, Удар Титана.
            </p>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <h3 className="text-lg font-bold">Берсерк</h3>
            <p className="text-muted-foreground">
              Этот билд ставит во главу угла максимальный урон. Основные
              характеристики: Сила, Выносливость, Ловкость.
            </p>
            <p className="text-muted-foreground mt-2">
              Ключевые способности: Яростный натиск, Удар Титана, Боевой клич.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold">Ротация навыков</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-muted rounded-lg p-4">
            <h3 className="text-lg font-bold">Ротация в бою</h3>
            <p className="text-muted-foreground">
              1. Начните с Защитной стойки, чтобы увеличить вашу защиту. 2.
              Используйте Удар Титана, чтобы оглушить врага. 3. Активируйте
              Яростный натиск, чтобы нанести серию мощных ударов. 4. Используйте
              Боевой клич, чтобы вдохновить союзников. 5. Повторяйте этот цикл,
              чередуя способности.
            </p>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <h3 className="text-lg font-bold">Ротация в группе</h3>
            <p className="text-muted-foreground">
              1. Начните с Защитной стойки, чтобы увеличить вашу защиту и защиту
              союзников. 2. Используйте Боевой клич, чтобы вдохновить союзников
              и увеличить их урон. 3. Активируйте Удар Титана, чтобы оглушить
              приоритетную цель. 4. Продолжайте использовать Защитную стойку и
              Боевой клич, чередуя с Ударом Титана. 5. Помогайте союзникам,
              используя Яростный натиск, чтобы нанести дополнительный урон.
            </p>
          </div>
        </div>
      </section> */}
    </div>
  )
}
