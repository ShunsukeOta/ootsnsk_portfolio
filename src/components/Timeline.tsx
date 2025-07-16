// src/components/Timeline.tsx
import {
  Text,
  Heading,
  Flex,
  useToken,
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineSeparator,
  TimelineIndicator,
  TimelineContent,
  TimelineTitle,
  TimelineDescription,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { MdSchool, MdLaptopMac } from "react-icons/md";
import { FaTshirt, FaBuilding } from "react-icons/fa";

type HistoryItem = {
  year: string;
  role: string;
  description?: string;
  icon: "MdSchool" | "MdLaptopMac" | "FaTshirt" | "FaBuilding"; // 型定義を更新
};

const history: HistoryItem[] = [
  {
    year: "2016年3月",
    role: "埼玉県立浦和工業高等学校 電気学科を卒業",
    icon: "MdSchool",
  },
  {
    year: "2016年4月 - 2018年10月",
    role: "ダイヤモンド印刷工業株式会社 - 印刷機オペレーター",
    icon: "FaBuilding",
  },
  {
    year: "2018年10月 - 2020年3月",
    role: "古物商を取得し、オンライン古着販売を開始",
    description:
      "実際に国内/国外の卸業者と繋がり仕入れ、販売を行っておりました。フリーマケットや、実際の古着屋を間借りし商品を販売も行っていました。\n古着販売EC(BASE)をカスタマイズする中で、WEB制作への興味が強くなりました",
    icon: "FaTshirt",
  },
  {
    year: "2020年10月 - 2021年3月",
    role: "本格的にWEB制作に関しての学習を開始",
    icon: "MdLaptopMac",
  },
  {
    year: "2021年4月 - 2024年4月",
    role: "taneCREATIVE株式会社 - WEBコーダー",
    description:
      "新潟県佐渡等に本社を構えるWEB制作会社にて正社員として勤務\n Wordpressや連携企業の開発した独自CMSを利用した案件の対応を行いました。",
    icon: "FaBuilding",
  },
  {
    year: " 現在",
    role: "WEB制作関連の学習を行いながら就職活動中",
    description:
      "",
    icon: "MdLaptopMac",
  },
];

const getIcon = (type: HistoryItem["icon"]): ReactNode => {
  switch (type) {
    case "MdLaptopMac":
      return <MdLaptopMac />;
    case "MdSchool":
      return <MdSchool />;
    case "FaBuilding":
      return <FaBuilding />;
      case "FaTshirt":
        return <FaTshirt />;
    default:
      return null;
  }
};

export default function CustomTimeline() {
  const [brandDark] = useToken("colors", ["brand.dark"]);

  return (
    <>
      <Flex align="baseline" gap={4} mb={{base: 4, md: 8 }}>
        <Heading as="h3" fontSize={{ base: "xl", md: "2xl"}}>経歴</Heading>
        <Text textStyle={{base: "xs", md: "sm" }} color="gray.400">
        About Me
        </Text>
      </Flex>
      {/* maxWとmxをに移動し、Timelineは子要素としてitems.mapを直接受け取る */}
      <Timeline.Root size={{base: "lg", md: "xl"}} maxW="600px" mx="auto" whiteSpace="pre-line">
        {history.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineConnector>
              <TimelineSeparator />
              {/* アイコンのサイズを調整 */}
              <TimelineIndicator color={brandDark}>
                {getIcon(item.icon)}
              </TimelineIndicator>
            </TimelineConnector>
            <TimelineContent>
              <TimelineTitle fontWeight="600" fontSize={{base: "sm", md: "md"}}>{item.role}</TimelineTitle>
              <TimelineDescription fontSize={{base: "xs", md: "sm"}}>{item.year}</TimelineDescription>
              {item.description && (
                <Text fontSize={{base: "sm", md: "md"}} mt={2}>
                  {item.description}
                </Text>
              )}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline.Root>
    </>
  );
}