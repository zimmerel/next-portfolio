import {
  Alert,
  AlertProps,
  Box,
  BoxProps,
  chakra,
  ChakraComponent,
  Checkbox,
  Code,
  forwardRef,
  List,
  Text,
  TextProps,
  useColorModeValue,
} from "@chakra-ui/react";
import Image, { ImageProps } from "next/image";
import { Children, cloneElement, ComponentType, isValidElement } from "react";

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

const Table: ChakraComponent<"table", {}> = (props) => (
  <chakra.div overflowX="auto">
    <chakra.table textAlign="left" mt="32px" width="full" {...props} />
  </chakra.div>
);

const Th: ChakraComponent<"th", {}> = (props) => (
  <chakra.th
    bg={useColorModeValue("gray.50", "whiteAlpha.100")}
    fontWeight="semibold"
    p={2}
    fontSize="sm"
    {...props}
  />
);

const Td: ChakraComponent<"td", {}> = (props) => (
  <chakra.td
    p={2}
    borderTopWidth="1px"
    borderColor="inherit"
    fontSize="sm"
    whiteSpace="normal"
    {...props}
  />
);

const Li: ChakraComponent<"li", {}> = (props) => (
  <chakra.li pb="4px" {...props} />
);

const ListItem: ChakraComponent<"li", {}> = ({ children, ...props }) => {
  let taskChildren = children;
  if (props.className === "task-list-item") {
    // if item is task item, pass children to checkbox
    const [checkbox, ...rest] = Children.toArray(children);

    if (isValidElement(checkbox)) {
      taskChildren = cloneElement(checkbox, checkbox.props, rest);
    }
  }

  return <Li {...props}>{taskChildren}</Li>;
};

const components: Record<string, ComponentType> = {
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
  ul: (props) => {
    if (props.className === "contains-task-list") {
      return <List {...props} />;
    }
    return <chakra.ul apply="mdx.ul" {...props} />;
  },
  ol: (props) => <chakra.ol apply="mdx.ul" {...props} />,
  li: ListItem,
  table: Table,
  td: Td,
  th: Th,
  tr: chakra.tr,
  section: (props: BoxProps) => <Box as="section" {...props} />,
  sup: (props: TextProps) => <Text as="sup" {...props} />,
  sub: (props: TextProps) => <Text as="sub" {...props} />,
  input: ({ checked, children }) => (
    <Checkbox isChecked={checked} isReadOnly>
      {children}
    </Checkbox>
  ),
};

export default components;
