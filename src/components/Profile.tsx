// src/components/Profile.tsx
import { Flex, Heading, Text, Separator, VStack, Box, Image } from "@chakra-ui/react";

export default function Profile() {
  return (
    <>
      <Separator mb={8} borderColor="whiteAlpha.400" />
      <Flex align="baseline" gap={4} mb={{base: 4, md: 8 }}>
        <Heading as="h3" fontSize={{ base: "xl", md: "2xl"}}>自己紹介</Heading>
        <Text textStyle={{base: "xs", md: "sm" }} color="gray.400">
        Profile
        </Text>
      </Flex>
      <Flex align="center" gap={6} mb={4}>
        <Box w={{ base: "120px", md: "120px" }} aspectRatio={1}>
          <Image
            src="/images/profile_image.png"
            alt="プロフィール画像"
            borderRadius="square"
            boxSize="full"
            objectFit="cover"
          />
        </Box>
        <VStack align="start" gap={0}>
          <Heading as="h2" size="lg" color="whiteAlpha.900">
            太田 隼輔
          </Heading>
          <Text color="gray.400" fontSize="sm">
            1997年10月17日
          </Text>
        </VStack>
      </Flex>
      <Text
        fontSize={{ base: "sm", md: "md" }}
        color="whiteAlpha.800"
        lineHeight="tall"
        mt={4}
      >
        これまで印刷業界とWeb業界で様々な業務に従事し、実績を積んできました。<br />
        印刷業界では、大型印刷機の操作を通じて繊細な色彩感覚と調整技術を磨き、クライアントの要望に沿った納品物の製造を実現しました。<br />
        Web業界では、フロントエンド開発を担当し、主にHTML・CSS・JavaScript・PHPを用いたサイト制作を行い、WordPressやSEO対策にも取り組みました。
        以前のWeb制作会社では、作業の効率化を意識し、Webページ制作時に設定していた構造化文書の作成を簡素化するシステムをJavaScriptで開発しました。基本情報の入力だけで設定文を自動的に生成できる仕組みを実装し、実際の業務で活用しました。その結果、案件ごとの設定のばらつきがなくなり、運用が大幅に効率化されました。
        今後も常に新しい技術や手法を取り入れ、より良い成果を上げられるよう、自身の市場価値を高め、社会に貢献できる人材となれるよう努めていきたいと考えています。
      </Text>
      <Separator mt={8} borderColor="whiteAlpha.400" />
    </>
  );
}