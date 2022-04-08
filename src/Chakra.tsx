import { ChakraProvider } from "@chakra-ui/react";
import { cookieStorageManager, localStorageManager } from "@chakra-ui/system";
import { GetServerSidePropsContext } from "next";
import { ReactNode } from "react";
import theme from './theme';

interface ChakraProps {
  cookies?: string;
  children: ReactNode;
}

export default function Chakra({ cookies, children }: ChakraProps) {
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManager(cookies)
      : localStorageManager;

  return (
    <ChakraProvider colorModeManager={colorModeManager} theme={theme}>
      {children}
    </ChakraProvider>
  );
}

export function getServerSideProps({ req }: GetServerSidePropsContext) {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
}
