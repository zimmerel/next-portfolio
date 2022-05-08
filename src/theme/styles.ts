import type { Theme } from '@chakra-ui/react';

const styles: Theme['styles'] = {
  global: (props) => {
    const altBgColor = props.colorMode === 'dark' ? 'gray.900' : 'gray.100';
    const altColor = props.colorMode === 'dark' ? 'blue.50' : 'blue.900';

    return {
      a: {
        color: 'purple.400',
      },
      '.md': {
        a: {
          color: 'purple.400',
          fontWeight: 'semibold',
          transition: 'color 0.15s',
          transitionTimingFunction: 'ease-out',
          _hover: {
            color: 'purple.500',
          },
        },
        h1: {
          mt: '2rem',
          mb: '.25rem',
          lineHeight: 1.2,
          fontWeight: 'bold',
          fontSize: '1.875rem',
          letterSpacing: '-.025em',
        },
        h2: {
          mt: '4rem',
          mb: '0.5rem',
          lineHeight: 1.3,
          fontWeight: 'semibold',
          fontSize: '1.5rem',
          letterSpacing: '-.025em',
          '& + h3': {
            mt: '1.5rem',
          },
        },
        h3: {
          mt: '3rem',
          // mb: "0.5rem",
          lineHeight: 1.25,
          fontWeight: 'semibold',
          fontSize: '1.25rem',
          letterSpacing: '-.025em',
        },
        h4: {
          mt: '3rem',
          lineHeight: 1.375,
          fontWeight: 'semibold',
          fontSize: '1.125rem',
        },
        p: {
          mt: '1.25rem',
          lineHeight: 1.7,
        },
        hr: {
          my: '4rem',
        },
        blockquote: {
          color: altColor,
          bg: altBgColor,
          borderLeftWidth: '8px',
          borderColor: 'purple.400',
          rounded: 'md',
          px: '1.25rem',
          py: '1rem',
          my: '1.5rem',
          display: 'flex',
          alignContent: 'center',
          '& p': {
            mt: 0,
          },
        },
        ul: {
          mt: '0.5rem',
          ml: '1.25rem',
          'blockquote &': { mt: 0 },
          '& > * + *': {
            mt: '0.25rem',
          },
        },
        code: {
          bg: altBgColor,
          color: altColor,
          fontFamily: 'mono',
          rounded: 'sm',
          p: 1,
          fontSize: '0.875em',
          whiteSpace: 'nowrap',
          lineHeight: 'normal',
        },
        pre: {
          code: {
            // borderWidth: "1px",
            w: 'full',
            d: 'block',
            rounded: 'md',
            whiteSpace: 'break-spaces',
            p: 4,
            my: '1.5rem',
          },
        },
      },
    };
  },
};

export default styles;
