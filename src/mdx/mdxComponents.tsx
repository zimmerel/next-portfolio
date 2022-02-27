import {
  Box,
  Text,
  Heading,
  Code,
  Link,
  TextProps,
  chakra,
  forwardRef,
  HTMLChakraComponents,
  Divider,
  As,
  CodeProps,
  BoxProps,
  UnorderedList,
  OrderedList,
  ListItem,
  Table,
  Thead,
  Tbody,
  Td,
  Th,
  Tr,
  Input,
  InputProps,
  Checkbox,
  List,
  ChakraProps,
  OmitCommonProps,
  ChakraComponent,
  useColorModeValue,
  Alert,
  AlertProps,
} from "@chakra-ui/react";
import Image, { ImageProps } from "next/image";
import type { MDXComponents } from "mdx/types";
import { Children, DetailedHTMLProps, HTMLAttributes } from "react";

const InlineCode: ChakraComponent<"code", {}> = (props) => (
  <chakra.code
    apply="mdx.code"
    color={useColorModeValue("purple.500", "purple.200")}
    {...props}
  />
);

const Pre: ChakraComponent<"pre", {}> = (props) => (
  <chakra.pre my="2em" borderRadius="sm" {...props} />
);

const CodeBlock = () => <></>;

const mdxComponents: MDXComponents = {
  p: (props) => <chakra.p apply="mdx.p" {...props} />,
  em: (props: TextProps) => <Text as="em" {...props} />,
  blockquote: (props: AlertProps) => (
    <Alert
      mt="4"
      role="none"
      status="warning"
      variant="left-accent"
      as="blockquote"
      rounded="4px"
      my="1.5rem"
      {...props}
    />
  ),
  code: (props) => (
    <Code whiteSpace="break-spaces" d="block" w="full" p={2} {...props} />
  ),
  inlineCode: InlineCode,
  del: (props: TextProps) => <Text as="del" {...props} />,
  img: ({ alt, ...props }) => (
    <Image alt={alt} layout="responsive" {...(props as ImageProps)} />
  ),
  a: forwardRef((props, ref) => (
    <chakra.a {...props} ref={ref} apply="mdx.a" />
  )),
  pre: (props) =>
    typeof props.children === "string" ? (
      <Pre {...props} />
    ) : (
      <CodeBlock {...props} />
    ),
  h1: (props) => <chakra.h1 apply="mdx.h1" {...props} />,
  h2: (props) => <chakra.h2 apply="mdx.h2" {...props} />,
  h3: (props) => <chakra.h3 apply="mdx.h3" {...props} />,
  h4: (props) => <chakra.h4 apply="mdx.h4" {...props} />,
  hr: (props) => <chakra.hr apply="mdx.hr" {...props} />,
  strong: (props: BoxProps) => (
    <Box as="strong" fontWeight="semibold" {...props} />
  ),
  ul: ({ className, ...props }) => {
    if (className === "contains-task-list") {
      return <List {...props} />;
    }
    return <chakra.ul apply="mdx.ul" {...props} />;
  },
  ol: (props) => <chakra.ol apply="mdx.ul" {...props} />,
  li: (props) => <chakra.li pb="4px" {...props} />,
  table: Table,
  thead: Thead,
  tbody: Tbody,
  td: Td,
  th: Th,
  tr: Tr,
  section: (props: BoxProps) => <Box as="section" {...props} />,
  sup: (props: TextProps) => <Text as="sup" {...props} />,
  sub: (props: TextProps) => <Text as="sub" {...props} />,
  input: ({ checked }) => <Checkbox isChecked={checked} isReadOnly />,
};

export default mdxComponents;
