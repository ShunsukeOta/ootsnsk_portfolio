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
  icon: "MdSchool" | "MdLaptopMac" | "FaTshirt" | "FaBuilding";
};

const history: HistoryItem[] = [
  {
    year: "2016年3月",
    role: "埼玉県立浦和工業高等学校 電気学科 卒業",
    icon: "MdSchool",
  },
  {
    year: "2016年4月 - 2018年10月",
    role: "ダイヤモンド印刷工業株式会社",
    description: "大型印刷機オペレーターとして、印刷物の品質管理と調整業務を担当。",
    icon: "FaBuilding",
  },
  {
    year: "2018年10月 - 2020年3月",
    role: "個人事業主として古物商を取得",
    description: "オンラインでの古着販売事業を開始。ECサイト（BASE）のカスタマイズを通じて、ウェブ制作に興味を持つ。",
    icon: "FaTshirt",
  },
  {
    year: "2020年10月 - 2021年3月",
    role: "ウェブ制作スキルを独学",
    description: "HTML/CSS、JavaScriptを中心に、実務に繋がるウェブ制作の学習を本格的に開始。",
    icon: "MdLaptopMac",
  },
  {
    year: "2021年4月 - 2024年4月",
    role: "taneCREATIVE株式会社",
    description: "ウェブコーダーとして、WordPressや独自CMSを利用したサイトのコーディング・メンテナンス業務に従事。",
    icon: "FaBuilding",
  },
  {
    year: " 現在",
    role: "ウェブ制作の技術を習得し、転職活動中",
    description: "現在のWeb業界のトレンドを学びながら、新たなキャリアに挑戦するため求職中。",
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
      <Timeline.Root size={{base: "lg", md: "xl"}} maxW="600px" mx="auto" whiteSpace="pre-line">
        {history.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineConnector>
              <TimelineSeparator />
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