import { styled } from '@app/styles'

export const Style = styled('ul', {
  pr: '$10',

  maxHeight: '70vh',
  overflowY: 'scroll',

  '> li + li': {
    mt: '$6'
  }
})
