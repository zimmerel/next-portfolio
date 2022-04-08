import { Box, Heading, Text, Link, Flex } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zach Riel</title>
        <meta
          name="description"
          content="Portfolio of Zach Riel. Created with Next.js and ChakraUI"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box display="flex" justifyContent="space-between">
        <Flex direction="column" gap={2}>
          <Heading>Hi, I am Zach</Heading>
          <Text>
            I like to write code and solve problems. This site is to share my
            work and thoughts.
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
