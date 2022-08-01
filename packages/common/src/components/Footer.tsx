import { siteConfig } from '@zmrl/portfolio-configs';
import { ComponentPropsWithoutRef } from 'react';

function FooterContent() {
  return (
    <div
    // w="100%"
    // h="100%"
    // align="center"
    // justify="flex-end"
    // gap={3}
    // color="gray.400"
    // maxW="1100px"
    >
      <a
        aria-label="go to Zach's github profile"
        href={siteConfig.github.profile}
        target="_blank"
        rel="noreferrer"
      >
        {/* <Icon
          as={GitHubIcon}
          display="block"
          transition="color 0.3s"
          _hover={{ color: 'gray.500' }}
          boxSize="5"
        /> */}
        GitHubIcon
      </a>
      {/* <ColorModeSwitch /> */}
    </div>
  );
}

export default function Footer(props: ComponentPropsWithoutRef<'footer'>) {
  // const bgColor = useColorModeValue('white', 'gray.800');

  return (
    <footer
      style={{
        // bgColor:{bgColor}
        bottom: 0,
        left: 0,
        position: 'sticky',
        right: 0,
        transition: 'box-shadow 0.2s, background-color 0.2s',
        width: '100%',
        zIndex: '3',
      }}
      {...props}
    >
      <div style={{ height: '3.5rem', margin: 'auto', maxWidth: '8xl' }}>
        <FooterContent />
      </div>
    </footer>
  );
}
