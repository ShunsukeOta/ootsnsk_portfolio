import { useState } from "react";
import {
  Stack,
  Heading,
  Text,
  Box,
  Container,
  Flex,
  VStack,
  Separator,
  Link,
  Button,
} from "@chakra-ui/react";
import {
  FaPhone,
  FaGithub,
  FaEnvelope,
  FaExternalLinkAlt,
} from "react-icons/fa";

import CustomTimeline from "./components/Timeline";
import SkillSheet from "./components/Skillsheet";
import Works from "./components/Works";

function App() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ootsnsk.r@gmail.com");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <Container maxW={{ base: "md", md: "2xl" }} py={{ base: 8, md: 12 }}>
      <Stack gap={12}>
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

        <Box>
          <Flex align="baseline" gap={4} mb={4}>
            <Heading as="h3">経歴</Heading>
            <Text textStyle="sm" color="gray.400">
              Career
            </Text>
          </Flex>
          <CustomTimeline />
        </Box>

        <Box>
          <Flex align="baseline" gap={4} mb={4}>
            <Heading as="h3">スキル</Heading>
            <Text textStyle="sm" color="gray.400">
              Skills
            </Text>
          </Flex>
          <SkillSheet />

          <Flex align="baseline" gap={4} mt={8} mb={4}>
            <Heading as="h4" size="md">
              資格
            </Heading>
            <Text textStyle="sm" color="gray.400">
              Certificates
            </Text>
          </Flex>
          <Text fontSize="sm" color="whiteAlpha.800">
            普通自動車一種免許 / 2023年4月取得<br />
            第二種電気工事士 / 2024年1月取得<br />
            日商簿記3級 / 2023年10月取得
          </Text>
        </Box>

        <Box>
          <Flex align="baseline" gap={4} mb={4}>
            <Heading as="h3">制作物</Heading>
            <Text textStyle="sm" color="gray.400">
              Works
            </Text>
          </Flex>
          <Works />
        </Box>

        <Box>
          <Flex align="baseline" gap={4} mb={4}>
            <Heading as="h3">連絡先</Heading>
            <Text textStyle="sm" color="gray.400">
              Contact
            </Text>
          </Flex>
          <VStack align="start" gap={4}>
            <Flex align="center" gap={4}>
              <Box bg="white" p={2} boxShadow="sm">
                <FaEnvelope size="18px" color="black" />
              </Box>
              <Text fontSize="sm" color="whiteAlpha.800">
                ootsnsk.r@gmail.com
              </Text>
              <Link href="mailto:ootsnsk.r@gmail.com" _hover={{ textDecoration: "none" }}>
                <Button size="xs" colorScheme="blue" variant="outline">
                  メール作成
                </Button>
              </Link>
              <Button
                size="xs"
                colorScheme={isCopied ? "green" : "blue"}
                variant="outline"
                onClick={handleCopyEmail}
              >
                {isCopied ? "コピーしました！" : "クリップボードにコピー"}
              </Button>
            </Flex>

            <Flex align="center" gap={4}>
              <Box bg="white" p={2} boxShadow="sm">
                <FaPhone size="18px" color="black" />
              </Box>
              <Text fontSize="sm" color="whiteAlpha.800">
                080-3023-6131
              </Text>
              <Link href="tel:080-3023-6131" _hover={{ textDecoration: "none" }}>
                <Button size="xs" colorScheme="blue" variant="outline">
                  発信
                </Button>
              </Link>
            </Flex>

            <Link
              href="https://github.com/ShunsukeOta"
              target="_blank"
              rel="noopener noreferrer"
              _hover={{ color: "blue.300", textDecoration: "none" }}
              style={{ textDecoration: "none" }}
            >
              <Flex align="center" gap={4}>
                <Box bg="white" p={2} boxShadow="sm">
                  <FaGithub size="18px" color="black" />
                </Box>
                <Text fontSize="sm" color="whiteAlpha.800">
                  github.com/ShunsukeOta
                </Text>
                <FaExternalLinkAlt size="12px" color="gray" />
              </Flex>
            </Link>
          </VStack>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;