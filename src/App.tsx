import { Container, Stack } from "@chakra-ui/react";

import Profile from "./components/Profile";
import Timeline from "./components/Timeline";
import SkillSheet from "./components/Skillsheet";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  return (
    <Container maxW={{ base: "md", md: "2xl" }} py={{ base: 8, md: 12 }}>
      <Stack gap={12}>
        <Profile />
        <Timeline />
        <SkillSheet />
        <Works />
        <Contact />
      </Stack>
    </Container>
  );
}

export default App;