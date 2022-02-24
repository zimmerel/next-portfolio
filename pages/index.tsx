import { Box, Button, Heading, Text, Link, Flex } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";

const TITLE = "Hello, I'm Zach";
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
        <Flex direction={"column"} gap={2}>
          <Heading>{TITLE}</Heading>
          <Text>
            I am a software developer with skills ranging across various stacks.
            Most of all, I love to solve problems. This site is to share my work
            and thoughts.
          </Text>
          <Text>
            Check out my{" "}
            <NextLink href="/blog" passHref>
              <Link>blog</Link>
            </NextLink>
            .
          </Text>
        </Flex>
      </Box>
    </>
  );
}
