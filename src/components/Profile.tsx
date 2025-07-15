import { Box,Flex, Heading, Text, Separator, VStack } from "@chakra-ui/react";


export default function Profile() {
  return (
    <Box
    bgGradient="linear(to-br, #2b2b2b, #1a1a1a)"
    p={{ base: 4, md: 8 }}
    borderRadius="xl"
    boxShadow="2xl"
  >
    <Flex align="baseline" mb={4} gap={4}>
      <Heading as="h1" size="xl" color="whiteAlpha.900">
        自己紹介
      </Heading>
      <Text fontSize="lg" color="gray.500" fontWeight="light">
        Profile
      </Text>
    </Flex>
    <Separator mb={8} borderColor="whiteAlpha.400" />
    <VStack align="start" gap={4} mb={8}>
      <Heading as="h2" size="lg" color="whiteAlpha.900">
        太田 隼輔
      </Heading>
      <Text color="gray.400" fontSize="md">
        1997年10月17日
      </Text>
    </VStack>
    <Text fontSize="sm" color="whiteAlpha.800" lineHeight="tall" mt={4}>
      これまで印刷業界とWeb業界で様々な業務に従事し、実績を積んできました。<br />
      印刷業界では、大型印刷機の操作を通じて繊細な色彩感覚と調整技術を磨き、クライアントの要望に沿った納品物の製造を実現しました。<br />
      Web業界では、フロントエンド開発を担当し、主にHTML・CSS・JavaScript・PHPを用いたサイト制作を行い、WordPressやSEO対策にも取り組みました。<br />
      作業の効率化を意識し、以前のWEB制作会社では、WEBページ制作時に設定を行っていた構造化文書の作成を簡素化するシステムをJavaScriptで開発しました。基本情報の入力だけで設定文を自動的に生成できる仕組みを実装し、実際の業務で活用しました。その結果、案件ごとの設定のばらつきがなくなり、運用が大幅に効率化されました。<br />
      今後も常に新しい技術や手法を取り入れ、より良い成果を上げられるよう・自身の価値を高め、有益な人材になれるよう努めていきたいと考えています。
    </Text>
  </Box>
  )
}