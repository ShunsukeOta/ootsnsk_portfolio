import { Container, Stack, Box, Text } from "@chakra-ui/react";
import Profile from "./components/Profile";
import Timeline from "./components/Timeline";
import SkillSheet from "./components/Skillsheet";
import Works from "./components/Works";
import Contact from "./components/Contact";
import SectionBox from "./components/SectionBox";

export default function App() {
  return (
    <Container maxW={{ base: "md", md: "2xl" }} py={{ base: 8, md: 12 }}>
      <Stack gap={12}>
        <SectionBox>
          <Profile />
        </SectionBox>
        <SectionBox>
          <Timeline />
        </SectionBox>
        <SectionBox>
          <Works />
        </SectionBox>
        <SectionBox>
          <SkillSheet />
        </SectionBox>
        <SectionBox>
          <Contact />
        </SectionBox>
      </Stack>
      <Box as="footer" mt={12} py={4}>
        <Text textAlign="center" fontSize="sm" color="gray.500">
          © Shunsuke Ota 2025
        </Text>
      </Box>
    </Container>
  );
}