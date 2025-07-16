// src/components/SkillSheet.tsx
import { Card, Grid, GridItem, Flex, Heading, Text } from "@chakra-ui/react"

type Skill = {
  title: string
  description: string
}

const skills: Skill[] = [
  {
    title: "HTML5",
    description: "セマンティックなHTMLマークアップを理解し、ウェブ標準に準拠した構造を構築できます。",
  },
  {
    title: "CSS / SCSS",
    description: "レスポンシブデザインに対応したスタイリングが可能で、SCSSを用いた効率的な開発ができます。",
  },
  {
    title: "JavaScript",
    description: "ES6以降のモダンな構文を理解し、非同期処理を伴う機能の実装が可能です。",
  },
  {
    title: "WordPress",
    description: "一般的なプラグインの調整やカスタムフィールドの活用、カスタマイズに関する知識があります。",
  },
  {
    title: "PHP",
    description: "WordPressサイトの構築・カスタマイズに必要な基本的な関数や構文を理解しています。",
  },
  // {
  //   title: "TypeScript",
  //   description: "型定義やインターフェースを適切に利用し、堅牢なコードを記述できます。",
  // },
  // {
  //   title: "React",
  //   description: "Hooksやコンポーネント設計の基本を理解しており、ウェブアプリケーションの構築が可能です。",
  // },
  // {
  //   title: "Chakra UI",
  //   description: "豊富なコンポーネントと柔軟なプロパティを活用し、効率的なUI開発ができます。",
  // },
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
      <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(2, 1fr)"}} gap={{base: 2, md: 4}} alignItems="stretch">
        {skills.map((skill, index) => (
          <GridItem key={index}>
            <Card.Root>
              {/* <Card.Body py="4"> */}
              <Card.Body px={{base: 4, md: 6}} py={{base: 3, md: 4}}>
                <Card.Title fontSize={{base: "sm" , md: "md" }} mb="1">{skill.title}</Card.Title>
                <Card.Description fontSize={{base: "sm", md: "md"}}>{skill.description}</Card.Description>
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