import { styled, theme } from '@app/styles'

import OriginalButton from '@app/components/atoms/Button'
import LoupeIcon from '@app/components/atoms/icons/Loupe'

export const Button = styled(OriginalButton, {
  bg: '$secondary',
  mt: 'auto',
  mb: '$6',

  alignSelf: 'flex-end'
})

export const Section = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  width: '100%',

  height: `calc(100vh - ${theme.sizes[28].value})`
})

export const Loupe = styled(LoupeIcon, {
  height: '$6',
  mr: '$4',

  path: {
    strokeWidth: 1,
    stroke: '$secondary'
  }
})

export const Search = styled('label', {
  display: 'flex',
  alignItems: 'center',

  p: '$2',
  my: '$6',
  b1: '$secondary',
  radius: '$4'
})

export const Radio = styled('label', {
  display: 'flex',

  input: { mr: '$1' },

  '& + label': {
    mt: '$4'
  }
})

export const Aside = styled('aside', {
  py: '$6',
  pr: '$10',

  form: {}
})

export const Style = styled('main', {
  display: 'flex',

  px: '$10',
  maxWidth: '$xl'
})
