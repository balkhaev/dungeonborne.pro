/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0Yrg25UZXem
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SetsGuidePage() {
  const gearSets = [
    {
      name: "Фея Озера / Fairys Blessibng",
      image:
        "https://steamuserimages-a.akamaihd.net/ugc/2468619149617312182/45FF5E7FE7E14159CD85EEACCF9FFD6FC1D65361/",
      bonuses: [
        "При нанесении прямого урона, который не блокируется, вызывайте фею, которая преследует цель. После попадания в цель фея взрывается, нанося 50 единиц священного урона врагам в пределах зоны и предоставляя 50-очковый щит ближайшим союзникам на 5 секунд. Этот эффект не может быть активирован снова, пока фея не вернется (0->2/10)",
        "Удваивайте количество наносимого урона и щита (0->2/20)",
        "Значительно увеличивает скорость полета феи, а по возвращении вызывает тот же эффект вокруг вас (0->2/30)",
      ],
    },
    {
      name: "Грозовая ярость / Storm Rage",
      image:
        "https://steamuserimages-a.akamaihd.net/ugc/2468619149617330395/F25EED8876D57701D8E788F40E0334BDBE9DFEA2/",
      bonuses: [
        "При движении генерируются заряды. По достижении 100 зарядов, при нанесении разблокированного прямого урона, цель будет поражена цепной молнией, что снизит скорость передвижения цели на 75% на 0,75 секунды (0->2/10)",
        'Когда активируется "Ярость бури", вы получаете 40%-ный бонус к скорости передвижения на 1 секунду (0->2/15)',
        "Цепная молния отскакивает от трех целей, нанося 200 единиц урона от молнии за каждый отскок (0->2/30)",
      ],
    },
    {
      name: "Запутанная цепь / Tangling Chain",
      image:
        "https://steamuserimages-a.akamaihd.net/ugc/2468619149617334807/400836ED978EF8C0C2FD2B306A112B5ED5E87E3A/",
      bonuses: [
        "После нахождения в пределах 4 метров от вражеского игрока в течение 3 секунд, при нанесении разблокированного прямого урона на 3 секунды появляется щит в 100 очков. Этот эффект может срабатывать раз в 15 секунд против одной и той же цели (0->2/10)",
        "При срабатывании вы увеличиваете скорость передвижения на 90% в течение 3 секунд, при этом эффект постепенно уменьшается с течением времени (0->2/15)",
        "При срабатывании увеличивается на 70 единиц восстановления жизни в секунду в течение 3 секунд (0->2/30)",
      ],
    },
    {
      name: "Милость смерти / Pity of Death",
      image:
        "https://steamuserimages-a.akamaihd.net/ugc/2468619149617355687/7C8DB9578B39DF840F60D2C9B61D604E0D92F199/",
      bonuses: [
        "При получении смертельного урона вы не умираете. Вместо этого ваше здоровье станет равным 70. (Так же, дает эффект невидимости на секунду, про это не сказано в описании). Этот эффект может быть активирован не более одного раза. Количество срабатываний сбрасывается при воскрешении (0->3/6)",
        "Теперь этот эффект может срабатывать несколько раз, но время восстановления составляет 120 секунд (0->3/12)",
      ],
    },
    {
      name: "Алхимик на веселе / Drunk Alchemist",
      image:
        "https://steamuserimages-a.akamaihd.net/ugc/2468619149617361502/23F2202D49CE8A7593ACEAE1FC08A43CE67EF50D/",
      bonuses: [
        "Нанося разблокированный прямой урон вражеским игрокам вне боя, вы получаете эффект случайного зелья. Если урон наносится с дальней дистанции, есть шанс вместо этого применить к цели случайный эффект колбы",
        "Этот эффект может срабатывать раз в 30 секунд (0->6/8).",
      ],
    },
    {
      name: "Сила Трёх / Force of Trinity",
      image:
        "https://steamuserimages-a.akamaihd.net/ugc/2468619149617367768/661F3093581F2F9CC7917A51E997331F1E47DE5D/",
      bonuses: [
        "После нанесения трех единиц незаблокированого прямого урона от атак или умений в течение 3 секунд, наносите 100 единиц физического урона ближайшим врагам (0->5/10). Таймер отката способности будет составлять 60 секунд",
        "Применяет 20%-ную уязвимость к целям в этом районе на 5 секунд (0->5/20)",
        "Замедляет действия целей в этом районе на 80%, замедляя действие в течение 5 секунд (0->5/30)",
      ],
    },
    {
      name: "Легкие мучения / Tiny Torment",
      image:
        "https://steamuserimages-a.akamaihd.net/ugc/2468619149623654818/8C0C223F6C9E7CCFA4456F29B89B59440DD5739D/",
      bonuses: [
        "При нанесении разблокированного прямого урона цель будет получать 5 единиц истинного урона каждые 0,5 секунды в течение 5 секунд. Время восстановления составляет 15 секунд (0->3/6)",
      ],
    },
    {
      name: "Прикосновение Мидаса / Midas Touch",
      image:
        "https://steamuserimages-a.akamaihd.net/ugc/2468619149617381955/F97755A2F29E368D767240E006FF2FC182E3968B/",
      bonuses: [
        "Получите 30 монет непосредственно в свой инвентарь после убийства цели (0->3/3)",
        "Получите 60 монет непосредственно в свой инвентарь при первом открытии каждого сундука (0->3/6)",
        "Получите 1800 монет непосредственно в свой инвентарь после успешного побега (0->3/9)",
      ],
    },
  ]
  const [searchTerm, setSearchTerm] = useState("")
  const [searchEffect, setSearchEffect] = useState("")
  const filteredGearSets = useMemo(() => {
    return gearSets.filter(
      (set) =>
        set.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        set.bonuses.some((item) => item.includes(searchEffect.toLowerCase()))
    )
  }, [gearSets, searchTerm])

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Эффекты сетов</h1>
      <div className="flex items-center mb-6">
        <Input
          type="text"
          placeholder="Поиск сета..."
          className="w-full max-w-md mr-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Поиск эффекта..."
          className="w-full max-w-md mr-4"
          value={searchEffect}
          onChange={(e) => setSearchEffect(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredGearSets.map((set) => (
          <Card key={set.name}>
            <img src={set.image} alt={set.name} className="rounded-t-lg" />
            <CardContent className="pt-4">
              <h3 className="text-xl font-bold mb-2">{set.name}</h3>
              <div className="mb-4">
                <ul className="list-disc pl-4 space-y-4">
                  {set.bonuses.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function ChevronsUpDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7 15 5 5 5-5" />
      <path d="m7 9 5-5 5 5" />
    </svg>
  )
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
