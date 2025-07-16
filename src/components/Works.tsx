// src/components/Works.tsx
import { Accordion, Stack, Text, Link, Image, Heading, Flex } from "@chakra-ui/react"
const items = [
  { value: "a", title: "ポートフォリオサイト", date: "2025年6月", skill: "HTML5, CSS3, TypeScript, React, VITE, Chakra UI等", work: "https://github.com/ShunsukeOta/ootsnsk-portfolio.git", text: "学習中の段階ですが、React×TypeScript×Viteで環境構築を行い、Chakra UIを使用しスタイリングを行いました。自身の経歴・スキル等の表示に重きを置き、シンプルな構成の単一ページにまとめました。", screenshot: "/images/works_portfolio.png"},
  { value: "b", title: "佐渡市観光ポータルサイト「さど観光ナビ」の制作業務", date: "2022年4月 - 2024年4月", skill: "TML5, CSS3, JavaScript, PHP, Adobe XD, Adobe Photoshop, XAMPP, Git", work: "https://www.visitsado.com/", text: "案件開始時に8名のチームでスタートし、メインコーダーおよびサブディレクションを担当しました。バックエンド側の作業を除き、フロントエンド開発をメインに、社内他部署やクライアントと動作仕様の確認や調整を行いながら、デザインをもとにWebサイトを制作しました。この案件では、連携会社が開発した独自CMSを使用しており、細かな仕様確認が必要となる複雑なプロジェクトでしたが、関係者との密な連携を図りながら進行しました。一通りの作業が完了し、運用保守フェーズに移行するまで携わりました。" },
  { value: "c", title: "トータルカーケアショップ集客用WEBページの制作業務", date:"", skill: "HTML5, CSS3, JavaScript, PHP, Adobe XD, Adobe Photoshop, XAMPP, Git", work: "https://kobayashi-motors.com/", text: "WordPressを使用し、既存サイトのリニューアルプロジェクトにおいてメインコーダーを担当しました。本プロジェクトでは、集客効果を高めることが目的であったため、SEOを強く意識した設計・実装を行いました。具体的には、Page Speed Insightsを活用したパフォーマンス改善、メタ情報の設定、構造化データの作成を実施しました。また、リニューアル前のブログ記事を再分類し、設定を見直す作業にも従事。これにより、コンテンツ整理とユーザビリティの向上を図りました。クライアントと密に連携を取りながら、本番反映作業を完了し、運用保守フェーズに移行するまでのプロセスを一貫して担当しました。" },
]

export default function Works () {
  return (
    <>
      <Flex align="baseline" gap={4} mb={{base: 4, md: 8 }}>
        <Heading as="h3" fontSize={{ base: "xl", md: "2xl"}}>制作物</Heading>
        <Text textStyle={{base: "xs", md: "sm" }} color="gray.400">
        Works
        </Text>
      </Flex>
      <Accordion.Root>
        {items.map((item, index) => (
          <Accordion.Item key={index} value={item.value}>
            <Accordion.ItemTrigger>
              <Stack gap="0" py="2">
                <Text fontSize={{base: "sm", md: "md"}} fontWeight="semibold">{item.title}</Text>
                <Text fontSize={{base: "xs", md: "sm"}} color="fg.muted">
                  {item.date}
                </Text>
              </Stack>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>
                <Image
                  src={item.screenshot}
                  alt={`${item.title} のスクリーンショット`}
                  borderRadius="xs"
                  maxH="200px"
                  objectFit="cover"
                />
                <Text fontSize={{base: "sm", md: "md"}} my={4}>{item.text}</Text>
                {item.skill && (<Text fontSize={{base: "xs", md: "sm"}}>使用技術: {item.skill}</Text>)}
                {item.work && (
                  <Text fontSize={{base: "xs", md: "sm"}}>
                    <Link variant="underline"
                          href={item.work}
                          colorPalette="teal">
                      成果物: {item.work}
                    </Link>
                  </Text>
                )}
              </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </>
  )
}