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

function FooterContent() {
  return (
    <Flex
      w="100%"
      h="100%"
      align="center"
      justify="flex-end"
      gap={3}
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
          _hover={{ color: 'gray.500' }}
          boxSize="5"
        />
      </Link>
      <ColorModeSwitch />
    </Flex>
  );
}

export default function Footer(props: HTMLChakraProps<'header'>) {
  const bgColor = useColorModeValue('white', 'gray.800');

  return (
    <chakra.footer
      pos="sticky"
      bottom="0"
      zIndex="3"
      left="0"
      right="0"
      width="full"
      bgColor={bgColor}
      transition="box-shadow 0.2s, background-color 0.2s"
      {...props}
    >
      <chakra.div height="3.5rem" mx="auto" maxW="8xl">
        <FooterContent />
      </chakra.div>
    </chakra.footer>
  );
}
