// src/components/Profile.tsx
import { Flex, Heading, Text, Separator, VStack, Box, Image } from "@chakra-ui/react";

export default function Profile() {
  return (
    <>
      <Separator mb={8}/>
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
          <Heading as="h2" size="lg">
            太田 隼輔
          </Heading>
          <Text color="gray.400" fontSize={{base: "xs", md: "sm"}}>
            1997年10月17日
          </Text>
        </VStack>
      </Flex>
      <Text
        fontSize={{ base: "sm", md: "md" }}
        lineHeight="tall"
        mt={4}
      >
        これまで印刷業界とWeb業界で培ってきた幅広い経験を活かし、ウェブ制作に携わってきました。<br />
      印刷機オペレーターとして、繊細な色彩感覚と緻密な調整技術を磨き、品質の高い印刷物を実現。その後、ウェブ業界へと転身し、フロントエンド開発を中心にキャリアを築いてきました。<br />
      前職では、HTML、CSS、JavaScript、PHPを用いたサイト制作やWordPressの構築、SEO対策を幅広く担当。特に、JavaScriptで構造化文書の自動生成システムを開発し、制作フローを効率化した経験は、私の「課題解決能力」と「効率化への意識」を示す具体的な実績です。<br />
      今後は、これまでの経験で培った技術力と、常に新しい技術を学ぶ探求心を活かし、ウェブ制作を通じて社会に貢献できる人材を目指します。
      </Text>
      <Separator mt={8}/>
    </>
  );
}