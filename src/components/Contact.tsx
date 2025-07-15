import { useState } from "react";
import {
  Heading,
  Text,
  Box,
  Flex,
  VStack,
  Link,
  Button,
} from "@chakra-ui/react";
import {
  FaPhone,
  FaGithub,
  FaEnvelope,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function Contact() {
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
    <>
      <Flex align="baseline" gap={4} mb={4}>
        <Heading as="h3">連絡先</Heading>
        <Text textStyle="sm" color="gray.400">
          Contact
        </Text>
      </Flex>
      <VStack align="start" gap={4}>
        {/* メールアドレスの項目 */}
        <Flex align="center" gap={4}>
          <Box bg="white" p={2} boxShadow="sm">
            <FaEnvelope size="18px" color="black" />
          </Box>
          <Text fontSize="sm" color="whiteAlpha.800">
            ootsnsk.r@gmail.com
          </Text>
          <Link
            href="mailto:ootsnsk.r@gmail.com"
            _hover={{ textDecoration: "none" }}
          >
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

        {/* 電話番号のリンク */}
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

        {/* GitHubのリンク（外部） */}
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
    </>
  );
}