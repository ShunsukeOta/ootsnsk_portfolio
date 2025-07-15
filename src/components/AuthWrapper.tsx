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
        p={{ base: 4, md: 8 }} // 小さい画面ではパディングを4、中くらいの画面では8に
        textAlign="center"
        // widthプロパティを追加し、画面幅によってコンポーネントの幅を調整
        w={{ base: "90%", md: "50%", lg: "30%" }} 
        mx="auto" // 左右のマージンを自動で設定して中央寄せにする
      >
        <form onSubmit={handleSubmit}>
          <VStack gap={4}>
            <Heading as="h2" size="lg">
              閲覧用パスワードを入力してください
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