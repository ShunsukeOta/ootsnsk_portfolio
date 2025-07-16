// src/components/AuthWrapper.tsx
import { useState } from "react";
import {
  Box,
  Button,
  Input,
  VStack,
  Heading,
} from "@chakra-ui/react";

const PASSWORD = "202507";

export const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isAuthed, setIsAuthed] = useState(false);
  const [inputPass, setInputPass] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (inputPass === PASSWORD) {
      setIsAuthed(true);
    } else {
      alert("閲覧用パスワードが正しくありません");
    }
  };

  if (!isAuthed) {
    return (
      <Box 
        py={{ base: 20, md: 40 }}
        px={{ base: 4, md: 8}}
        textAlign="center"
        w={{ base: "100%", md: "400px", lg: "400px" }} 
        maxW={400}
        mx="auto"
      >
        <form onSubmit={handleSubmit}>
          <VStack gap={4}>
            <Heading as="h2" size={{base: "md", md: "lg"}}>
              閲覧用パスワードを<span>入力してください</span>
            </Heading>
            <Input
              type="password"
              placeholder="Password"
              value={inputPass}
              onChange={(e) => setInputPass(e.target.value)}
            />
            <Button type="submit" colorScheme="blue">
              認証
            </Button>
          </VStack>
        </form>
      </Box>
    );
  }

  return <>{children}</>;
};