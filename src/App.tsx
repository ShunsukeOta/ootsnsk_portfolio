import { Stack, Heading, Text } from '@chakra-ui/react'
import { Box,Container } from '@chakra-ui/react'
import CustomTimeline from './components/Timeline';
import SkillSheet from "./components/Skillsheet";
import Works from "./components/Works";

function App() {
  return (
    <Stack>
      <Container maxW="2xl" pt={10} pb={50}>
        <Heading as="h1" mb={5}>自己紹介</Heading>
        <Box background="transparent" width="100%" padding="4" color="white" borderWidth="1px" borderColor="border.disabled">
          <Text textStyle="xl" fontWeight={'bold'}>太田 隼輔（おおた しゅんすけ）</Text>
          <Text textStyle="sm" fontWeight={'bold'}>1997年10月17日</Text>
          <Text textStyle="sm" mt="5">
            これまで印刷業界とWeb業界で様々な業務に従事し、実績を積んできました。<br />
            印刷業界では、大型印刷機の操作を通じて繊細な色彩感覚と調整技術を磨き、クライアントの要望に沿った納品物の製造を実現しました。<br />
            Web業界では、フロントエンド開発を担当し、主にHTML・CSS・JavaScript・PHPを用いたサイト制作を行い、WordPressやSEO対策にも取り組みました。<br />
            作業の効率化を意識し、以前のWEB制作会社では、WEBページ制作時に設定を行っていた構造化文書の作成を簡素化するシステムをJavaScriptで開発しました。基本情報の入力だけで設定文を自動的に生成できる仕組みを実装し、実際の業務で活用しました。その結果、案件ごとの設定のばらつきがなくなり、運用が大幅に効率化されました。<br />
            今後も常に新しい技術や手法を取り入れ、より良い成果を上げられるよう・自身の価値を高め、有益な人材になれるよう努めていきたいと考えています。</Text>
        </Box>
        <Heading as="h3" mt={10} mb={5}>経歴 - About Me</Heading>
        <CustomTimeline />
        <Heading as="h3" mt={10} mb={5}>スキル - Skills</Heading>
        <SkillSheet />
        <Heading as="h3" mt={10} mb={5}>制作物 - Works</Heading>
        <Works />
        <Heading as="h4" mt={10}>あとがき</Heading>
        本ポートフォリオサイトは、react + TypeScript + Vite + Chakra UIで作成しました。
      </Container>
    </Stack>
  )
}

export default App
