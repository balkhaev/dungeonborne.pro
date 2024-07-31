import MobsList from "@/components/mobs/mobs-list"
import { createClient } from "@/utils/supabase/server"

export const metadata = {
  title: "Гайд по фарму золота в Dungeonborne",
}

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/D9LlDh9Goey
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default async function GoldPage() {
  const supabase = createClient()
  const { data } = await supabase
    .from("mobs")
    .select("*")
    .eq("drop", "high")
    .neq("risk", "high")

  return (
    <div className="py-12 md:py-20 px-4 md:px-6">
      <div className="space-y-12 md:space-y-16">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Фарм золота в Dungeonborne
          </h1>
          <p className="mt-2 text-muted-foreground">
            Эффективные способы заработка золота для успешной игры
          </p>
        </div>
        <div className="w-full max-w-4xl mx-auto">
          <p>
            Золото в Dungeonborne добывать не сложно, главное ходить в локации 3
            и 4 уровня и иметь мобильный класс.{" "}
            <b>Основная задача, убивать мобов с хорошим лутом, избегая PVP.</b>{" "}
            Есть несколько вариантов как можно действовать
          </p>
        </div>
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">Подходящие классы</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold">Друид-быстрыеноги</h3>
              <div className="mt-2 flex items-start gap-4">
                <div>
                  <p>
                    Самый простой способ фармить и уходить живым - играть за
                    друида. В форме кошки обдалает огромным мувспидом, навыком
                    прыжка на большое расстояние и видит игроков через стены.
                    Идеальный персонаж для игрока фармилы.
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Совет: ставьте деревья в дверные проемы и не забывайте про
                    природный инвиз
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold">Рога-хренпопадешь</h3>
              <div className="mt-2 flex items-start gap-4">
                <div>
                  <p>
                    Более требовательный к эквипу, так как надо собирать высокий
                    показатель ловкости. Проще убивать крипов, некоторых можно
                    станлочить ударами кинжала в спину, но сложнее уходить от
                    погони так как требуется некоторый навык мувмента.
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    Совет: лучше взять мгновенный инвиз, во многих ситуациях у
                    вас не будет времени на подготовку
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">Локации</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold">Замок Клузо</h3>
              <div className="mt-2 flex items-start gap-4">
                <p>
                  Отличная открытая карта, хорошо подходит для фарма друидом так
                  как позволяет ему использовать форму кошки на максимум. Много
                  ящиков к которым можно пройти без битвы с мобами.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold">Кончина грешника</h3>
              <div className="mt-2 flex items-start gap-4">
                <p>
                  Закрытая и коридорная карта, на ней вас могут легко зажать в
                  угол. Тут лучше подходит рога, так как самый эффективный
                  вариант - не убежать, а спрятаться. Есть несколько отдаленых
                  кемпов где можно уединенно пофармить.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full max-w-4xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">High value мобы</h2>
            <div className="text-gray-400">с низким риском</div>
          </div>
          {data && <MobsList items={data} />}
        </div>
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">Заключение</h2>
          <p className="mt-4">
            Роумим указанных мобов (позже добавим карту с маршрутом), избегаем
            PVP, лутаем сундуки, идем на выход. Всегда старайтесь открывать
            порталы со свитком портала, особенно на последних кругах, гангеры
            будут роумить любой пинг об открытии портала.
          </p>
        </div>
      </div>
    </div>
  )
}
