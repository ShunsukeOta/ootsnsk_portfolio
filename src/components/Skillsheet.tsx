// src/components/SkillSheet.tsx
import { Card, Grid, GridItem, Flex, Heading, Text } from "@chakra-ui/react"

type Skill = {
  title: string
  description: string
}

const skills: Skill[] = [
  {
    title: "HTML5 / HTML Standard",
    description: "基本的な仕様の理解があります。",
  },
  {
    title: "CSS / SCSS",
    description: "基本的な仕様の理解があります。",
  },
  {
    title: "WordPress",
    description: "一般的なプラグインの調整やカスタムフィールド等への理解があります。",
  },
  {
    title: "PHP",
    description: "WordPressサイト制作における基本的な関数の挙動の理解があります。",
  },
  {
    title: "JavaScript",
    description: "ES6以降の構文や非同期処理に関する基本的な理解があります。",
  },
  {
    title: "TypeScript",
    description: "型定義やインターフェースの使用、基本的な型推論に対応できます。",
  },
  {
    title: "React",
    description: "Hooksやコンポーネント設計の基礎を理解し、簡単な構築が可能です。",
  },
  {
    title: "Chakra UI",
    description: "スタイルの一元管理やレスポンシブ対応の設計ができます。",
  },
]

export default function SkillSheet() {
  return (
    <>
      <Flex align="baseline" gap={4} mb={{base: 4, md: 8 }}>
        <Heading as="h3" fontSize={{ base: "xl", md: "2xl"}}>スキル</Heading>
        <Text textStyle={{base: "xs", md: "sm" }} color="gray.400">
        Skills
        </Text>
      </Flex>
      <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4}>
        {skills.map((skill, index) => (
          <GridItem key={index}>
            <Card.Root>
              <Card.Body>
                <Card.Title fontSize="md">{skill.title}</Card.Title>
                <Card.Description fontSize={{base: "xs", md: "sm"}}>{skill.description}</Card.Description>
              </Card.Body>
            </Card.Root>
          </GridItem>
        ))}
      </Grid>
      
      {/* 資格セクションをサブセクションとして追加 */}
      {/* <Flex align="baseline" gap={4} mb={{base: 4, md: 8 }}>
        <Heading as="h4" fontSize={{ base: "md", md: "lg"}}>資格</Heading>
        <Text textStyle={{base: "xs", md: "sm" }} color="gray.400">
        Certificates
        </Text>
      </Flex>
      <Text fontSize={{base: "sm", md: "md" }} color="whiteAlpha.800">
        普通自動車一種免許 / 2023年4月取得<br />
        第二種電気工事士 / 2024年1月取得<br />
        日商簿記3級 / 2023年10月取得
      </Text> */}
    </>
  )
}