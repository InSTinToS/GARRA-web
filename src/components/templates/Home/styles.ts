import { styled } from '@app/styles'

import OriginalButton from '@app/components/atoms/Button'

export const ArrowButton = styled('button', {
  flexCenter: 'row',
  position: 'absolute',

  top: '$13',
  left: '$13',

  svg: {
    height: '$6',

    path: {
      fill: '$primary'
    }
  }
})

export const Logo = styled('img', {
  width: '100%',
  maxWidth: '$96'
})

export const Forgot = styled('p', {
  textAlign: 'center',

  '@sm': {
    fontSize: '$4',

    a: { fontSize: '$4' }
  }
})

export const Button = styled(OriginalButton, {
  py: '$4',
  maxWidth: '$96',

  fontWeight: 'bold',

  bg: '$secondary ',

  '& + button': { mt: '$2', mb: '$6', bg: '$primary' }
})

export const Field = styled('input', {
  '&[type="text"]': {
    pl: '$4',
    mb: '$4',
    radius: '$4',
    height: '$12',
    width: '100%',
    maxWidth: '$96',

    border: 'solid 1px $black',

    '&::placeholder': { opacity: 0.6 },

    '@sm': {
      fontSize: '$4'
    }
  }
})

export const Form = styled('form', {
  position: 'relative',

  flexCenter: 'col',

  px: '$4',
  size: '100%',
  radius: '$6',

  bg: '$tertiary',
  boxShadow: '8px 8px 32px 0px rgba(0,0,0,0.2)',

  '@sm': { px: '$8' },

  '@md': { height: 'auto', width: '$137', p: '$13' }
})

export const Style = styled('main', {
  flexCenter: 'row',

  py: '$4',
  px: '$2',

  height: '100vh',

  bg: '$primary',

  '@sm': {
    p: '$8'
  }
})
