'use client';
import { Inter } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { spacingScale, spacings } from '../partials/spacings';
import { CSSProperties } from 'react';
import { colorPalette } from '../partials/colorPalette';

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

declare module '@mui/material/styles' {
  interface TypographyVariants {
    'body-large': CSSProperties;
    'body-large-bold': CSSProperties;
    'body-medium': CSSProperties;
    'body-medium-bold': CSSProperties;
    'body-normal': CSSProperties;
    'body-normal-bold': CSSProperties;
    'body-small': CSSProperties;
    'body-small-bold': CSSProperties;
  } // allow configuration using `createTheme`

  interface TypographyVariantsOptions {
    'body-large'?: CSSProperties;
    'body-large-bold'?: CSSProperties;
    'body-medium'?: CSSProperties;
    'body-medium-bold'?: CSSProperties;
    'body-normal'?: CSSProperties;
    'body-normal-bold'?: CSSProperties;
    'body-small'?: CSSProperties;
    'body-small-bold'?: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    'body-large': true;
    'body-large-bold': true;
    'body-medium': true;
    'body-medium-bold': true;
    'body-normal': true;
    'body-normal-bold': true;
    'body-small': true;
    'body-small-bold': true;
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    desktop: true;
    desktopHD: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    tertiary: true;
  }
}

const headingStyle = (fontSize: number) => ({
  fontFamily: inter.style.fontFamily,
  fontWeight: 700,
  fontSize: `${fontSize}px`,
  lineHeight: `${fontSize * 1.1}px`
})

const bodyStyle = (fontSize: number, isBold?: boolean) => ({
  fontFamily: inter.style.fontFamily,
  fontWeight: isBold ? 700 : 400,
  fontSize: `${fontSize}px`,
  lineHeight: `${fontSize * 1.4}px`
})

const customTheme = createTheme(
  {
    breakpoints: {
      values: {
        xs: 0,
        mobile: 320,
        tablet: 768,
        desktop: 1024,
        desktopHD: 1440
      },
    },
    spacing: (factor: number) => `${spacingScale * factor}px`,
    typography: {
      fontFamily: inter.style.fontFamily,
      h1: {
        ...headingStyle(56)
      },
      h2: {
        ...headingStyle(48),
      },
      h3: {
        ...headingStyle(40),
      },
      h4: {
        ...headingStyle(32),
      },
      h5: {
        ...headingStyle(24),
      },
      h6: {
        ...headingStyle(20),
      },
      'body-large': {
        ...bodyStyle(20)
      },
      'body-large-bold': {
        ...bodyStyle(20, true)
      },
      'body-medium': {
        ...bodyStyle(18)
      },
      'body-medium-bold': {
        ...bodyStyle(18, true)
      },
      'body-normal': {
        ...bodyStyle(16)
      },
      'body-normal-bold': {
        ...bodyStyle(16, true)
      },
      'body-small': {
        ...bodyStyle(14)
      },
      'body-small-bold': {
        ...bodyStyle(14, true)
      }
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableRipple: true, // No more ripple, on the whole application
        },
        styleOverrides: {
          root: {
            '&:hover': {
              backgroundColor: "#061F35",
            },
            '&:active': {
              backgroundColor: "#526B81",
            },
            '&:disabled': {
              color: colorPalette.white,
              backgroundColor: colorPalette.grey5,
            },
          }
        },
        variants: [
          {
            props: { variant: 'primary' },
            style: {
              backgroundColor: colorPalette.primary,
              color: colorPalette.white,
            }
          },
          {
            props: { variant: 'secondary' },
            style: {
              backgroundColor: colorPalette.secondary,
              color: colorPalette.white,
            }
          },
          {
            props: { variant: 'outlined' },
            style: {
              border: `2px solid ${colorPalette.primary}`,
              backgroundColor: colorPalette.white,
              color: colorPalette.grey1,
              '&.MuiButton-root': {
                '&:hover': {
                  backgroundColor: '#CED5DB',
                  border: '2px solid #101D26',
                },
                '&.Mui-disabled': {
                  border: `1px solid ${colorPalette.grey4}`,
                  color: colorPalette.grey5,
                  backgroundColor: colorPalette.white,
                },
                '&:active': {
                  border: '2px solid #5C6972',
                  backgroundColor: '#9DABB6',


                },
              },
            }
          },
        ]
      }
    }
  }
)

export default customTheme