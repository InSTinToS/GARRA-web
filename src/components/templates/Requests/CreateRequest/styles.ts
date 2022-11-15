import { styled } from '@app/styles'

import CloseIcon from '@app/components/atoms/icons/Close'

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',

  fontSize: '$4',
  fontWeight: '$5',

  color: '$primary'
})

export const Close = styled(CloseIcon, {
  path: { fill: '$error' }
})

export const Quantity = styled('label', {
  input: { ml: '$4', width: '$32' }
})

export const Description = styled('label', {
  flexCenter: 'col',
  my: '$4',

  textarea: {
    width: '$sm',
    height: '$40',
    resize: 'none',
    mt: '$4'
  }
})

export const Form = styled('form', {
  flexCenter: 'col',
  pt: '$8',

  width: '$sm'
})

export const Style = styled('section', {
  p: '$10',
  radius: '$4',

  bg: '$tertiary'
})
