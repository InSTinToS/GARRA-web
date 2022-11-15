import { styled } from '@app/styles'

export const Header = styled('div', {
  width: '100%',
  flexCenter: 'row',

  button: {
    flex: 1,
    py: '$4',
    bg: '$secondary',
    color: '$tertiary',

    '& + button': {
      bg: '$primary'
    }
  }
})
