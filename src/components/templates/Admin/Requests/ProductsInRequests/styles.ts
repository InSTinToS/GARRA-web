import { styled, theme } from '@app/styles'

import ArrowIcon from '@app/components/atoms/icons/Arrow'
import LoupeIcon from '@app/components/atoms/icons/Loupe'

import { hexToRgba } from '@app/utils/colors'

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',

  px: '$4',
  py: '$2',

  bg: '$secondary',

  button: { flexCenter: 'row', mr: '$4' }
})

export const Arrow = styled(ArrowIcon, {
  height: '$4',
  transform: 'rotate(-90deg)',

  path: { fill: '$tertiary' }
})

export const Products = styled('ul', {
  p: '$4',
  bg: `${hexToRgba(theme.colors.secondary.value, 0.4)}`,

  'li + li': { mt: '$4' }
})

export const ProductData = styled('p', {
  color: '$tertiary'
})

export const ProductStyle = styled('li', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  button: {
    px: '$4',
    radius: '$2',
    height: '$10',
    bg: '$primary',
    color: '$tertiary'
  }
})

export const Search = styled('label', {
  display: 'flex',
  alignItems: 'center',
  size: '100%',
  px: '$2',

  input: { color: '$tertiary', py: '$2', size: '100%' }
})

export const Loupe = styled(LoupeIcon, {
  height: '$5',
  mr: '$4',

  path: { strokeWidth: 1, stroke: '$tertiary' }
})

export const Style = styled('div', {
  overflowY: 'hidden',
  pr: 0
})
