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
      alert("パスワードが正しくありません");
    }
  };

  if (!isAuthed) {
    return (
      <Box p={8} textAlign="center">
        <form onSubmit={handleSubmit}>
          <VStack gap={4}>
            <Heading as="h2" size="lg">
              パスワードを入力してください
            </Heading>
            <Input
              type="password"
              placeholder="Password"
              value={inputPass}
              onChange={(e) => setInputPass(e.target.value)}
            />
            <Button type="submit" colorScheme="blue">
              入室
            </Button>
          </VStack>
        </form>
      </Box>
    );
  }

  return <>{children}</>;
};