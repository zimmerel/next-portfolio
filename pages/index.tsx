import { Box, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../src/components/header.";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zach&apos;s Portfolio</title>
        <meta name="description" content="Zach Riel's Portfolio App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Heading>Zach&apos;s Portfolio</Heading>
          <Text>{"What's up?!"}</Text>
        </Box>
      </Box>
    </>
  );
};

export default Home;
