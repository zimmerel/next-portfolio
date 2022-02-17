import { Box, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";

const TITLE = "Zach's Portfolio";
const DESCRIPTION =
  "Zach Riel's Portfolio app. Created with Next.js and ChakraUI";

export default function Home() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Heading>{TITLE}</Heading>
          <Text>{"What's up?!"}</Text>
        </Box>
      </Box>
    </>
  );
}
