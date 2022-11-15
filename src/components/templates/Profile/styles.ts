import { styled, theme } from '@app/styles'

import DefaultAvatarIcon from '@app/components/atoms/icons/DefaultAvatar'

export const DefaultAvatar = styled(DefaultAvatarIcon, {
  fill: '$primary',
  height: '$48'
})

export const Logo = styled('img', {
  height: '$24'
})

export const Input = styled('input', {
  flex: 1,

  ml: '$4',
  height: '$10',
  fontSize: '$4',

  color: '$tertiary',

  "&[type='password'], &[type='text']": {}
})

export const Label = styled('label', {
  flexCenter: 'row',
  width: '100%',

  fontWeight: '$6',
  fontSize: '$4',

  color: '$tertiary',

  '& + label': {
    mt: '$4'
  }
})

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',

  px: '$8',
  py: '$20',
  radiusR: '$6',
  height: '100%',

  bg: '$primary'
})

export const Avatar = styled('button', {})

export const Header = styled('header', {
  flexCenter: 'col',

  px: '$8',
  py: '$20',
  radiusL: '$6',
  height: '100%',

  bg: '$tertiary'
})

export const Card = styled('section', {
  flexCenter: 'row',

  mb: '$10'
})

export const Style = styled('main', {
  flexCenter: 'col',

  px: '$10',
  height: `calc(100vh - ${theme.sizes[28].value})`,

  bg: '$secondary'
})
