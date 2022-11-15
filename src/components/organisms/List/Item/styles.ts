import { styled, theme } from '@app/styles'

import { hexToRgba } from '@app/utils/colors'

export const Content = styled('div', {
  p: '$4'
})

export const Header = styled('header', {
  button: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',

    p: '$4',

    span: { color: '$tertiary' }
  },

  variants: {
    variant: {
      black: { button: { bg: '$black' } },
      primary: { button: { bg: '$primary' } },
      secondary: { button: { bg: '$secondary' } }
    }
  },

  defaultVariants: { variant: 'primary' }
})

export const Style = styled('div', {
  variants: {
    variant: {
      black: { bg: `${hexToRgba(theme.colors.black.value, 0.4)}` },
      primary: { bg: `${hexToRgba(theme.colors.primary.value, 0.4)}` },
      secondary: { bg: `${hexToRgba(theme.colors.secondary.value, 0.4)}` }
    }
  },

  defaultVariants: { variant: 'primary' }
})
