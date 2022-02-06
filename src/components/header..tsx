import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HTMLChakraProps,
  Icon,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import siteConfig from "../../configs/site-config";
import { GitHubIcon } from "./icons";

interface Props {}

function HeaderContent() {
  const { toggleColorMode } = useColorMode();
  const switchModeText = useColorModeValue("dark", "light");
  const SwitchModeIcon = useColorModeValue(MoonIcon, SunIcon);

  return (
    <Flex w="100%" h="100%" px="6" align="center" justify="space-between">
      <Flex
        justify="flex-end"
        w="100%"
        align="center"
        color="gray.400"
        maxW="1100px"
      >
        <Link
          isExternal
          aria-label="go to Zach's github profile"
          href={siteConfig.github.profile}
        >
          <Icon
            as={GitHubIcon}
            display="block"
            transition="color 0.3s"
            _hover={{ color: "gray.500" }}
            boxSize="6"
          />
        </Link>
        <IconButton
          size="md"
          fontSize="lg"
          aria-label={`Switch to ${switchModeText} mode`}
          variant="ghost"
          color="current"
          ml="3"
          onClick={toggleColorMode}
          icon={<SwitchModeIcon />}
        />
      </Flex>
    </Flex>
  );
}

export default function Header(props: HTMLChakraProps<"header">) {
  return (
    <Box
      as="header"
      pos="sticky"
      top="0"
      zIndex="3"
      left="0"
      right="0"
      width="full"
      {...props}
    >
      <Box height="4.5rem" mx="auto" maxW="8xl">
        <HeaderContent />
      </Box>
    </Box>
  );
}
