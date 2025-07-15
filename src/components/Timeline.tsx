// src/components/Timeline.tsx
import {
  Text,
  Timeline,
  useToken
} from "@chakra-ui/react"
import { ReactNode } from "react"
import { LuCheck, LuPackage, LuShip } from "react-icons/lu"
import { MdSchool, MdWork } from "react-icons/md"

type HistoryItem = {
  year: string
  role: string
  description?: string
  icon: "ship" | "check" | "package" | "MdSchool" | "MdWork"
}

const history: HistoryItem[] = [
  {
    year: "2016年3月",
    role: "埼玉県立浦和工業高等学校 電気学科を卒業",
    // description: "React・TypeScriptを用いた業務システムの開発を担当。",
    icon: "MdSchool",
  },
  {
    year: "2016年4月 - 2018年10月",
    role: "ダイヤモンド印刷工業株式会社 - 印刷機オペレーター",
    // description: "ランディングページやWordPressサイトのコーディングを多数担当。",
    icon: "MdWork",
  },
  {
    year: "2018年10月 - 2020年3月",
    role: "古物商を取得し、オンライン古着販売をスタート",
    description: "実際に国内/国外の卸業者と繋がり仕入れ、販売を行っておりました。フリーマケットや、実際の古着屋を間借りし商品を販売も行っていました。\n古着販売EC(BASE)をカスタマイズする中で、WEB制作への興味が強くなりました",
    icon: "MdWork",
  },
  {
    year: "2020年4月 - 2021年3月",
    role: "本格的にWEB制作に関しての学習を開始",
    // description: "個人でポートフォリオやWebサービスを開発・受託。",
    icon: "MdWork",
  },
  {
    year: "2021年4月 - 2024年4月",
    role: "taneCREATIVE株式会社 - WEBコーダー",
    description: "新潟県佐渡等に本社を構えるWEB制作会社にて正社員として勤務\n Wordpressや連携企業の開発した独自CMSを利用した案件の対応を行いました。",
    icon: "MdWork",
  },
  {
    year: " 現在",
    role: "WEB制作関連の学習を行いながら就職活動中です",
    description: "新潟県佐渡等に本社を構えるWEB制作会社にて正社員として従事。Wordpressや連携企業の開発した独自CMSを利用した案件の対応を行いました。",
    icon: "MdWork",
  },
]

// アイコン切り替え関数
const getIcon = (type: HistoryItem["icon"]): ReactNode => {
  switch (type) {
    case "ship":
      return <LuShip />
    case "check":
      return <LuCheck />
    case "package":
      return <LuPackage />
    case "MdWork":
      return <MdWork />
    case "MdSchool":
      return <MdSchool />
    default:
      return null
  }
}

export default function CustomTimeline() {
  const [brandDark] = useToken("colors", ["brand.dark"])

  return (
    <Timeline.Root maxW="600px" mx="auto" whiteSpace="pre-line">
      {history.map((item, index) => (
        <Timeline.Item key={index}>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator color={brandDark}>
              {getIcon(item.icon)}
            </Timeline.Indicator>
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>{item.role}</Timeline.Title>
            <Timeline.Description>{item.year}</Timeline.Description>
            {item.description && (
              <Text textStyle="sm" mt={0}>
                {item.description}
              </Text>
            )}
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline.Root>
  )
}
