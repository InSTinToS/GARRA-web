import { styled } from '@app/styles'

import ArrowIcon from '@app/components/atoms/icons/Arrow'

import List from '@app/components/organisms/List'

export const Codes = styled('ul', {
  maxHeight: '$52',
  overflowY: 'scroll'
})

export const Code = styled('li', {
  color: '$white'
})

export const CustomHeader = styled('div', {
  display: 'flex',
  alignItems: 'center'
})

export const Title = styled('span', {
  marginLeft: 16,

  color: 'white'
})

export const Arrow = styled(ArrowIcon, {
  height: '$4',
  transform: 'rotate(-90deg)',

  fill: '$tertiary'
})

export const Style = styled(List, {
  pr: 0,
  overflowY: 'hidden',

  li: {
    mb: 0,

    'li + li': {
      mt: '$4'
    }
  }
})
