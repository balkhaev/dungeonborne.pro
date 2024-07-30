/**
 * v0 by Vercel.
 * @see https://v0.dev/t/wEsMI28Hqgq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function RelicsGuidePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Как получить все реликвии</h1>
      <div className="mb-4">
        В данный момент в игре есть 3 реликвии:
        <ol className="mt-2">
          <li>► Фрагмент Короны Богов</li>
          <li>► Фрагмент Подвески Луны</li>
          <li>► Фрагмент Меча Богов</li>
        </ol>
      </div>
      <img
        src="https://steamuserimages-a.akamaihd.net/ugc/2482129948487870674/9F3831424BFEDBC43E7D2B5BB1A0A70D04D26458/"
        className="w-full"
      />
      <div className="grid gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Корона богов</h2>
          <div className="flex gap-6">
            <img
              src="https://steamuserimages-a.akamaihd.net/ugc/2482129948487873830/B02B8B0427417AA51FD22D292D92F86CEA09409E/"
              className="w-96"
            />
            <div>
              <p className="text-muted-foreground">
                Корона находится в статуе в виде руки. В одной игре спавниться
                только один Фрагмент Короны Богов, так что нужно будет
                поторопиться его унести.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Подвеска луны</h2>
          <Alert variant="default" className="mb-4">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <AlertTitle>Информация</AlertTitle>
            <AlertDescription>
              * Полнолуния появляется в неопределенное время, нет четкого
              графика когда оно будет. Поэтому не советую специально тратить
              свое время в ожидании его в главном меню.
            </AlertDescription>
          </Alert>
          <div className="flex flex-col gap-4">
            <div className="flex gap-6">
              <img
                src="https://steamuserimages-a.akamaihd.net/ugc/2482129948489970043/68E731886EFF2EE4F7575270F15C271639D4B63C/"
                className="w-96"
              />
              <div>
                <p className="text-muted-foreground">
                  После того как в главном меню (во вкладке «Лагерь») на заднем
                  фоне наступит полнолуния, вам нужно будет зайти в режим
                  «Тренировочная комната».
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <img
                src="https://steamuserimages-a.akamaihd.net/ugc/2482129948489970570/EB6EF27D6331BE22FE957A5F33EF7F47EF1475F2/"
                className="w-96"
              />
              <div>
                <p className="text-muted-foreground">
                  Внутри главного здания будет постамент над которым будет яркая
                  луна, подойдите к постаменту и заберите яркий свет который
                  будет возле постамента.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Меч богов</h2>
          <div className="flex gap-6">
            <img
              src="https://steamuserimages-a.akamaihd.net/ugc/2482129948487883549/92B2CDD1D8D9E36F3A6BCB4DDEC3804F5950C41D/"
              className="w-96"
            />
            <div>
              <p className="text-muted-foreground">
                Фрагмент меча богов находится в цветочном саркофаге в центре
                комнаты.
                <br />
                <br />
                Для того чтоб открыть саркофаг вам ОБЯЗАТЕЛЬНО нужно иметь с
                собой в инвентаре два легендарных предмета:
                <ol>
                  <li>– «Корона богов»</li>
                  <li>– «Подвеска луны»</li>
                </ol>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
