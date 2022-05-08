import {
  chakra,
  Flex,
  HTMLChakraProps,
  Icon,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import siteConfig from '../site.config';
import { GitHubIcon } from './icons';
import ColorModeSwitch from './ColorModeSwitch';

function HeaderContent() {
  return (
    <Flex w="100%" h="100%" align="center" justify="space-between" gap={3}>
      <Flex justify="flex-end" align="center" color="gray.400" maxW="1100px">
        <Link
          isExternal
          aria-label="go to Zach's github profile"
          href={siteConfig.github.profile}
        >
          <Icon
            as={GitHubIcon}
            display="block"
            transition="color 0.3s"
            _hover={{ color: 'gray.500' }}
            boxSize="5"
          />
        </Link>
        <ColorModeSwitch />
      </Flex>
    </Flex>
  );
}

export default function Header(props: HTMLChakraProps<'header'>) {
  const headerBg = useColorModeValue('white', 'gray.800');
  return (
    <chakra.header
      pos="sticky"
      top="0"
      zIndex="3"
      left="0"
      right="0"
      width="full"
      bgColor={headerBg}
      transition="box-shadow 0.2s, background-color 0.2s"
      {...props}
    >
      <chakra.div height="4.5rem" mx="auto" maxW="8xl">
        <HeaderContent />
      </chakra.div>
    </chakra.header>
  );
}
