import { Theme } from "@chakra-ui/react";

const markdownStyles: Theme["styles"]["global"] = {
  a: {
    color: "purple.400",
    fontWeight: "semibold",
    transition: "color 0.15s",
    transitionTimingFunction: "ease-out",
    _hover: {
      color: "purple.500",
    },
  },
  h1: {
    mt: "2rem",
    mb: ".25rem",
    lineHeight: 1.2,
    fontWeight: "bold",
    fontSize: "1.875rem",
    letterSpacing: "-.025em",
  },
  h2: {
    mt: "4rem",
    mb: "0.5rem",
    lineHeight: 1.3,
    fontWeight: "semibold",
    fontSize: "1.5rem",
    letterSpacing: "-.025em",
    "& + h3": {
      mt: "1.5rem",
    },
  },
  h3: {
    mt: "3rem",
    // mb: "0.5rem",
    lineHeight: 1.25,
    fontWeight: "semibold",
    fontSize: "1.25rem",
    letterSpacing: "-.025em",
  },
  h4: {
    mt: "3rem",
    lineHeight: 1.375,
    fontWeight: "semibold",
    fontSize: "1.125rem",
  },
  p: {
    mt: "1.25rem",
    lineHeight: 1.7,
    "blockquote &": {
      mt: 0,
    },
  },
  hr: {
    my: "4rem",
  },
  blockquote: {
    bg: "orange.100",
    borderWidth: "1px",
    borderColor: "orange.200",
    rounded: "lg",
    px: "1.25rem",
    py: "1rem",
    my: "1.5rem",
  },
  ul: {
    mt: "0.5rem",
    ml: "1.25rem",
    "blockquote &": { mt: 0 },
    "& > * + *": {
      mt: "0.25rem",
    },
  },
  code: {
    bg: "gray.900",
    fontFamily: "mono",
    rounded: "sm",
    p: 1,
    fontSize: "0.875em",
    whiteSpace: "nowrap",
    lineHeight: "normal",
  },
  pre: {
    code: {
      // borderWidth: "1px",
      w: "full",
      d: "block",
      whiteSpace: "break-spaces",
      p: 4,
      my: "1.5rem",
    },
  },
};

const styles: Theme["styles"] = {
  global: (props) => ({
    a: {
      color: "purple.400",
    },
    ".md": markdownStyles,
  }),
};

export default styles;
