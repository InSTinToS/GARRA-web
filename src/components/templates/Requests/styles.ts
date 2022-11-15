import { styled } from '@app/styles'

export const Radio = styled('label', {
  input: {
    mr: '$1'
  },

  '& + label': {
    ml: '$4'
  }
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  px: '$20',
  py: '$10',
  width: '100%'
})

export const Style = styled('main', {
  flexCenter: 'col',

  px: '$10',
  maxWidth: '$xl',

  section: { width: '100%' }
})
