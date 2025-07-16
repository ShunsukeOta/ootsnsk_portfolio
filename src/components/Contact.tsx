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
      <Flex align="baseline" gap={4} mb={{base: 4, md: 8 }}>
        <Heading as="h3" fontSize={{ base: "xl", md: "2xl"}}>連絡先</Heading>
        <Text textStyle={{base: "xs", md: "sm" }} color="gray.400">
          Contact
        </Text>
      </Flex>
      <VStack align="start" gap={{base: 2, md: 4}}>
        <Flex align="center" gap={4}>
        <Box bg="white" p={2} boxShadow="sm" fontSize={{ base: "12px", md: "18px" }}>
            <FaEnvelope color="black" />
          </Box>
          <Text fontSize={{ base: "xs", md: "sm"}}>
            ootsnsk.r@gmail.com
          </Text>
          <Button
            size={{base: "xs", md: "sm" }}
            colorScheme={isCopied ? "green" : "blue"}
            variant="outline"
            onClick={handleCopyEmail}
          >
            {isCopied ? "完了" : "コピー"}
          </Button>
        </Flex>
        <Flex align="center" gap={4}>
          <Box bg="white" p={2} boxShadow="sm" fontSize={{ base: "12px", md: "18px" }}>
            <FaPhone color="black" />
          </Box>
          <Text fontSize={{ base: "xs", md: "sm"}}>
            080-3023-6131
          </Text>
          <Link href="tel:080-3023-6131" _hover={{ textDecoration: "none" }}>
            <Button size={{base: "xs", md: "sm" }} colorScheme="blue" variant="outline">
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
          <Box bg="white" p={2} boxShadow="sm" fontSize={{ base: "12px", md: "18px" }}>
              <FaGithub color="black" />
            </Box>
            <Text fontSize={{ base: "xs", md: "sm"}}>
              github.com/ShunsukeOta
            </Text>
            <FaExternalLinkAlt size="12px" color="gray" />
          </Flex>
        </Link>
      </VStack>
    </>
  );
}