import { extendTheme, theme as baseTheme, type Theme } from '@chakra-ui/react';
import styles from './styles';

const fonts: Theme['fonts'] = {
  ...baseTheme.fonts,
  mono: 'Fira Code, monospace',
};

const config: Theme['config'] = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const theme = extendTheme({
  fonts,
  config,
  styles,
});

export default theme;
