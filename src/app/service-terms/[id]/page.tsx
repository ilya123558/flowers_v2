'use client'

import { Button } from "@/shared/button/Button"
import { Container } from "@/shared/container/Container"
import { privacyPolicy, offer, delivery, payment } from "@/utils/const/privacy-policy"
import { TDocumentBase } from "@/utils/types/privacy-policy"
import clsx from "clsx"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

type TStateTag = 'payment' | 'delivery' | 'policy' | 'offer'
type TState = {title: string, svg: React.ReactNode, value: TStateTag}[]

const list: TState = [
  {title: 'Условия оплаты', value: 'payment', svg: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect width="32" height="32" fill="url(#pattern0_1617_11804)"/>
      <defs>
      <pattern id="pattern0_1617_11804" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use xlinkHref="#image0_1617_11804" transform="scale(0.0104167)"/>
      </pattern>
      <image id="image0_1617_11804" width="96" height="96" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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"/>
      </defs>
    </svg>
  )},
  {title: 'Доставка и возврат', value: 'delivery', svg: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect width="32" height="32" fill="url(#pattern0_1617_11808)"/>
      <defs>
      <pattern id="pattern0_1617_11808" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use xlinkHref="#image0_1617_11808" transform="scale(0.0104167)"/>
      </pattern>
      <image id="image0_1617_11808" width="96" height="96" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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"/>
      </defs>
    </svg>
  )},
  {title: 'Политика конфиденциальности', value: 'policy', svg: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect width="32" height="32" fill="url(#pattern0_1617_11812)"/>
      <defs>
      <pattern id="pattern0_1617_11812" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use xlinkHref="#image0_1617_11812" transform="scale(0.0104167)"/>
      </pattern>
      <image id="image0_1617_11812" width="96" height="96" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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"/>
      </defs>
    </svg>
  )},
  {title: 'Оферта', value: 'offer', svg: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect width="32" height="32" fill="url(#pattern0_1617_11816)"/>
      <defs>
      <pattern id="pattern0_1617_11816" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use xlinkHref="#image0_1617_11816" transform="scale(0.0104167)"/>
      </pattern>
      <image id="image0_1617_11816" width="96" height="96" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAHlUlEQVR4nO2d23MURRTG580nq3xUXyzLV8t/gCpf9M0HRRBEREG5qCiXIPcAgXD3BoKoiKHU0lIs2GQJG3IjQEgIkAsJt4ACoqCgIPgXfFZb36nq2uoxw7DZOdOZU3Vqs5vd2Znf1326+3RPbxBklllmmWWWWWaZZZZZZpmV0QA8BmAOgB8ANAM4DqAXQDeAE3zeBeAogA4A7QAOAzgI4ACAVn6uCUAjgAYA+wDsBZAHUAtgR9LXqc4APALgEwAD9JMA+oYB/h4AVzMRLAMwnrBPA+gnyF0AagB8CmArgC0APqZvBrCJ/hGAD+kfAHif/h6AjfQNANbTzbF+A/ArgG3BSDcA7xK88TZC38basLXE8NcBWAvgAoBfAFw2xwxGeMk34E8xRGwrA/y1/M5zAC4C+NkcNxhpBuBRK+yUE/4aCj7A7z4PYNB8NhhJBuAzK+yUE/5qq5HvZZtzFsAZ87lgBHU1B3jxNWWGv9qC38PeVS9rhTmf6sB3AzCXArQmAL+6CL50bU8wJPZ4LwKA71kKdyUAf5UDvowrOvn6MQBLA1+NJd+Uti8TgL9qiEFdO4Xo8FYElrDeYRhkrYsAf2WEEfVB6/miIO0G4BmmB64AuGWlF5KAXxUxndHM5y0mNxWk0QDcz27mPwDu0G9buZ0k4FdFgG/ySPvpjfRZQQrhD1rwr7MGXEqw5FcBWBERfgFAPR9FjHeCtJhV8m8z8XXRGvonCX/5XcDfRy8ws1pIhQiM+VLyi+H/lDD8ZSwcUeEXe4N6EdjgStgphn8hYfjLCDIufAlHetsElvo7jPnF8C8kDL8SwFcx4YtL4zw70GgAbjL2X3LAP58w/KX8fFz4tgDNKruohH87BP5gwvCXAljCJGAc+OIigPGKQJMR/t8h8AcVwF/Mv7+LCd8eI7TS5wVajPBvhcA/pwD+YpNi4OMXISIMBV8EaKIApmc1P9BghH8zBP5ZJfAX0hfws58zO5u/C/jiLRRAhwiEfzME/hll8OfTzeKAefQKzlnM5Rql2fRZZgxAfxvATPpbfO2/Y2kR4K8Q+Gc8hP8mXY0ABv6fIfBPewr/DR5vgQYBDPwbIfBPeQp/Bo+tQoAbdBf8AU/hz9AmwPUQ+AOewp/O71ioQQAD/48Q+P2ewp8m36VBAAP/9xD4Jz2FP01TDTDwr4XA74sJfwNHnf3WIipZxyNLSWSq0Uy2HLLmdJs4eLKXquf5t7g9Gjb/20kBo8KfKqJrEOAa1+C74PfFhN/PkDbc8AuW51lbosB/XZMAV7kG3wW/N0bYaUoAvqQcaiLCVyWA3ADhgt8TI+b3JwRfPh8F/msUIPl1RIR/JQR+d4wGty8h+I38fxT4U9j4qxDgCt0F/0SM3k4hIfhNDEFR4KsT4HII/OMxuprrrRXM5YRfzy5qFPiTZY5BgwCXOR/sgn88Zj+/mnc4tpcp7OxkDygq/FdlHKJBgEtcDeGCfyylg6ypQ8BXJYAsRXHB7/IU/is8xyUaBJDVEC74XZ7CnyTnq0EAWQ3hgt/pKfxJmmqATMa74Hd4Cv9lnnfyd9VYk/Eu+B2ewp8o569BAJkLdsE/4in8iZpqwDkmz1zw2z2F/xKvo1KDADIT5oJ/OCb8FRxIdXOAJ6PiTh5X1vvbAzIzEMtxALeH29UY3w1gO8UrFfwJck0aBDjNVLQL/qGY8HuYkLtX+LXWKHk3a0wp4E/QVANkHsAF/2CMsFM/DPAlNbG9RPBfZMFapkEAmQdwwW+LEfO7hwm+eX9dieCPl9CqQQCZB3DBPxCjwT02TPBl2rEU8MdrqgGSu3fBb43R28kNE/wGLk8vBfxxrAHLNQggWVAX/JYYXc3lPE6p4dexe1oK+C/wPFUIIFlQF/yWmP38RQC+tSZL7jXs7OBYoVTwVQkg8doFvzmlg6wJQ8AfSwFWaNkNpSsEfpOn8MdwvKJCAElBuOA3egp/jCYBJAXhgr/fU/jPU4AqDQLIbiQu+A1sUH2DP5bzHCrS0TIAc8EvsLHyCf5ovr9KxZ3z1lYwLvj7uDLOJ/ij+R1mrnuyBgFksOSCX89NW32C/xyvwQgwSoMA0v10wTeDoh8tAXyAP85aaPCAlm0pm0Pg55kC2OgJ/GdZkEzpHxtoMKvxDYNfx20BKjyAP53wK1WUfmNFuRoXfPEaCpB2+CsBPB5oMcItDAFffAtrQJrgj7PCjvEnA00G4OuI8MV3UISZSuGP4funsN2qssKOnpIvxt1QRIC6CF7LX01aYwmgJrdj9XCkxFfxfTpifrHxAqOWfjt/X0shNrN0VVCQRHM7nMOew+8ZpRa8GICHCHcoEWojeM56FA97vfj/9+K1zGm1BWk0Trz/nwCa4ecYQo0AuSCNBuBBLnyqd4igHX6OmdzOVP+aBoCnrfnYfIrg11uLyp4I0mxsCPdaN8/VpQB+O0v/usAHA/AUL05WJYTViFyCDW49w478lsw3AO4LfDG2CZVFt4iGbQXZVOSyQ61MccpmqQesR1mBITujix+iH7Z+I6ad4UW8wwJ/hJuJ+APfNgAPMyxtYinLK4DfxppQnfqYn1lmmWWWWWaZZZZZZpkFabR/AY1KLXRUBKWPAAAAAElFTkSuQmCC"/>
      </defs>
    </svg>
  )}
] 

export default function Page () {
  const pathname = usePathname()
  const router = useRouter()
  const [activeList, setActiveList] = useState<TDocumentBase>(privacyPolicy)

  useEffect(() => {
    if(pathname.includes('offer')) {
      setActiveList(offer)
    }
    if(pathname.includes('policy')) {
      setActiveList(privacyPolicy)
    }
    if(pathname.includes('payment')) {
      setActiveList(payment)
    }
    if(pathname.includes('delivery')) {
      setActiveList(delivery)
    }
  }, [pathname])
  
  return (
    <section className="roboto mb-[24px] sm:mt-[0px] mt-[40px]">
      <Container>
        <div className="">
          <h5 className="sm:text-[24px] text-[21px] font-bold text-[#C8C8C8] leading-[100%]">Условия покупки и сервис</h5>
          <p className="text-[#878787] sm:text-[18px] text-[16px] font-medium leading-[100%] tracking-[2%] sm:mt-[24px] mt-[18px]">
            Мы стремимся сделать каждую покупку приятной и беззаботной. Здесь вы найдёте всю информацию о способах оплаты, доставке, возврате и гарантиях качества. Ваш комфорт и уверенность наш приоритет.
          </p>
          <div className="mt-[24px] sm:p-[32px] p-[10px] bg-[#212121] rounded-[8px]">
            <div className="grid lg:grid-cols-4 grid-cols-2 sm:gap-[16px] gap-[8px]">
              {list.map(({svg, title, value}, index) => (
                <Button 
                  key={index}
                  onClick={() => router.push(`/service-terms/${value}`)} 
                  className={clsx("bg-[#393939] sm:border-[3px] border-[1px] border-[#393939] rounded-[8px] sm:p-[20px] p-[10px] sm:h-[128px] h-[95px] sm:active:scale-95 active:scale-[0.98]", pathname.includes(value) && "!border-yellow")}
                >
                  <div className="">{svg}</div>
                  <p className={clsx("text-[#D9D9D9] sm:text-[16px] text-[13px] font-bold sm:leading-[151%] text-start mt-[8px]", pathname.includes(value) && "!text-yellow")}>{title}</p>
                </Button>
              ))}
            </div>
            {pathname.includes('offer') && (
              <div className="mt-[24px] text-[#D9D9D9] leading-[151%] flex flex-col gap-[24px]">
                <p>Настоящий документ является официальным предложением (офертой) «Первый цветочный», в лице ИП __________, в дальнейшем именуемый «Компания», в адрес зарегистрированных пользователей на платформе (неограниченному кругу физических, юридических лиц, включая Индивидуальный предпринимателей и самозанятых граждан, согласившихся с условиями настоящей оферты, далее- «Пользователь»), заключить договор на указанных в настоящей оферте условиях.</p>
                <p>В соответствии с пунктом 3 статьи 438 Гражданского кодекса Российской Федерации, акцепт настоящей Оферты совокупностью способов, указанных в п. 1.1.7 Оферты, считается равносильным заключению Договора на условиях, изложенных в Оферте.</p>
                <p>Компания просит принять во внимание, что вышеперечисленные действия являются полным и безусловным согласием (акцептом) с настоящей Офертой в соответствии со статьями 435 и 437 Гражданского кодекса Российской Федерации, в связи с чем Пользователю рекомендовано внимательно ознакомится с текстом настоящей Оферты, а в случае несогласия с условиями, не производить акцепт Оферты.</p>
              </div>
            )}
            {pathname.includes('policy') && (
              <div className="mt-[24px] text-[#D9D9D9] leading-[151%] flex flex-col gap-[24px]">
                <p>Настоящая Политика конфиденциальности персональных данных (далее – Политика), размещенная на сайтах по уникальному адресу (URL): https://flowers-v2-two.vercel.app/ (далее — «Сайт») является официальным документом Оператора Сайта _________ (ИНН: ________) и действует в отношении всей информации, которую Оператор может получить о Пользователе во время использования им Сайта, устанавливает обязательства Оператора по неразглашению и обеспечению режима защиты конфиденциальности персональных данных, которые Пользователь предоставляет в процессе использования Сайта.</p>
                <p>Настоящая политика составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных», соответствует индустриальным стандартам ISO, PCI DSS, GDPR и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных.</p>
                <p>Несмотря на то, что мы рекомендуем вам ознакомиться с настоящей Политикой целиком, ниже следует краткое изложение некоторых из наиболее важных аспектов:</p>
                <p>Мы можем объединять информацию, предоставленную вами, с другой информацией, которую мы собрали о вас (онлайн или оффлайн). Мы также можем объединять ее с информацией о вас, полученной из других источников, например, из общедоступных источников информации (включая информацию из ваших общедоступных профилей социальных медиа-ресурсов) и других третьих лиц.</p>
                <p>Мы не будем использовать или передавать Ваши персональные данные, за исключением случаев, разрешенных настоящей Политикой. Мы используем все коммерчески разумные технические и организационные меры контроля для обеспечения безопасности и защиты ваших персональных данных, но мы не можем гарантировать, что ваши персональные данные будут полностью защищены от хищения злоумышленниками или других неблаговидных, или преступных действий.</p>
              </div>
            )}

            <div className="mt-[24px] text-[#D9D9D9] leading-[151%] flex flex-col gap-[24px]">
              {activeList && activeList.sections.map(({paragraphs, section_id, title}, index, arr) => (
                <div key={section_id} className="flex flex-col gap-[24px]">
                  <div className="">
                    <p className="text-[21px]">{section_id}. {title}</p>
                    <div className="flex flex-col mt-[8px]">
                      {paragraphs.map(({paragraph_id, sub_paragraphs, text, text_list, title}) => (
                        <div key={paragraph_id} className="">
                          {text
                            ? <p className="text-[16px]">{paragraph_id} {text}</p>
                            : (
                              <>
                                {title 
                                  ? <p className="text-[16px]">{title}</p>
                                  : (
                                    <div className="flex flex-col">
                                      {text_list && text_list.map((text_item, text_item_index) => (
                                        <div key={text_item_index} className="flex gap-[6px] items-center ml-[5px]">
                                          <div className="max-w-[3px] max-h-[3px] w-[3px] h-[3px] rounded-full bg-[#D9D9D9]"/>
                                          <p className="text-[16px]">{text_item}</p>
                                        </div>
                                      ))}
                                    </div>
                                  )
                                }
                              </>
                            )
                          }
                          
                          <div className="ml-[16px]">
                            {sub_paragraphs && sub_paragraphs.map((sub_paragraphs_item) => (
                              <div key={sub_paragraphs_item.paragraph_id} className="">
                                <p className="text-[16px]">{sub_paragraphs_item.paragraph_id} {sub_paragraphs_item.text}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {arr.length - 1 !== index && <div className="border-t-[1px] border-[#6D6D6A] border-dashed w-full"/>}
                </div>
              ))}
            </div>
            {(pathname.includes('offer') || pathname.includes('policy')) && (
              <div className="mt-[24px] text-[#D9D9D9] leading-[151%] flex flex-col gap-[24px]">
                <div className="border-t-[1px] border-[#6D6D6A] border-dashed w-full"/>
                <div className="">
                  <p className="text-[21px]">{pathname.includes('policy') ? "10" : "11"}. Реквизиты компании</p>
                  <div className="mt-[8px]">
                    <p>Индивидуальный предприниматель</p>
                    <p>Адрес</p>
                    <p>ИНН:</p>
                    <p>ОГРН:</p>
                    <p>Банк:</p>
                    <p>Номер расчётного счёта:</p>
                    <p>БИК Банка:</p>
                    <p>Корреспондентский счёт:</p>
                    <p>Поддержка по телефону:</p>
                    <p>Отдел закупок и продаж B2B:</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}