import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

type SectionBoxProps = {
  children: ReactNode;
};

export default function SectionBox({ children }: SectionBoxProps ) {
  return (
    <Box>
      { children }
    </Box>
  )
}