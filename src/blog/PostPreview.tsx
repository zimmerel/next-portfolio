import Image from "next/image";
import {
  Box,
  BoxProps,
  Container,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { PostData } from "./types";
import useDateFormat from "./useDateFormat";
import Link from "next/link";
import { useState } from "react";

type PreviewPostData = Pick<
  PostData,
  "author" | "date" | "title" | "excerpt" | "coverImageUrl" | "slug"
>;

interface Props extends BoxProps {
  post: PreviewPostData;
}

export default function PostPreview({ post, ...boxProps }: Props) {
  const { author, date, title, excerpt, coverImageUrl, slug } = post;
  const formattedDate = useDateFormat(date);

  return (
    <LinkBox width="100%" overflow="hidden" my={2} role="group" {...boxProps}>
      <Box>
        <Text>
          {author}{" "}
          <Text as="span" color="gray.500">
            &bull; {formattedDate}
          </Text>
        </Text>
      </Box>
      <Flex mt={2} width="100%">
        <Box width="80%">
          <Heading fontWeight="bold" fontSize="2xl">
            <Link
              href={{
                pathname: "/blog/[slug]",
                query: { slug },
              }}
              passHref
            >
              <LinkOverlay>{title}</LinkOverlay>
            </Link>
          </Heading>
          <Text noOfLines={3}>{excerpt}</Text>
        </Box>
        <Spacer />
        {coverImageUrl && (
          <Box position="relative" width="15%" height="15%" ml={1}>
            <Image
              src={coverImageUrl}
              alt={`Cover image for ${title}`}
              height={150}
              width={150}
              layout="responsive"
            />
          </Box>
        )}
      </Flex>
      <Box>
        <Text
          opacity={0}
          _groupHover={{ opacity: 1 }}
          transition="opacity 0.1s"
          color="gray.500"
        >
          [Read More]
        </Text>
      </Box>
    </LinkBox>
  );
}
