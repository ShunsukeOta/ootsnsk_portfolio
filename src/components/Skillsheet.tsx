// src/components/SkillSheet.tsx
import { Card, Grid, GridItem } from "@chakra-ui/react"

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
    <Grid templateColumns="repeat(auto-fit, minmax(280px, 1fr))" gap={4}>
      {skills.map((skill, index) => (
        <GridItem key={index}>
          <Card.Root>
            <Card.Body>
              <Card.Title fontSize="md">{skill.title}</Card.Title>
              <Card.Description fontSize="xs">{skill.description}</Card.Description>
            </Card.Body>
          </Card.Root>
        </GridItem>
      ))}
    </Grid>
  )
}
