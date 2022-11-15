import { styled, theme } from '@app/styles'

import OriginalButton from '@app/components/atoms/Button'
import BarcodeIcon from '@app/components/atoms/icons/Barcode'
import CloseIcon from '@app/components/atoms/icons/Close'

export const ModalContent = styled('section', {
  flexCenter: 'col'
})

export const ScannerBackground = styled('div', {
  flexCenter: 'col',

  py: '$10',
  mb: '$10',
  radius: '$4',

  bg: '$black'
})

export const BarCodes = styled('ul', {
  pb: '$8',
  pr: '$6',
  mt: '$6',

  maxHeight: '$105',
  overflowY: 'scroll',

  'li + li': {
    mt: '$6'
  }
})

export const Button = styled(OriginalButton, {
  maxWidth: 'none',

  mt: 'auto'
})

export const Label = styled('label', {
  color: '$tertiary',
  display: 'flex',
  alignItems: 'center',

  '& + label': { mt: '$6' }
})

export const Input = styled('input', {
  "&[type='text'], &[type='number']": {
    border: 'none',
    p: '$2',
    ml: '$4',
    flex: 1,
    radius: '$4',
    outline: 'none',
    bg: '$tertiary'
  }
})

export const BarCode = styled(BarcodeIcon, {
  height: '$6',
  mx: '$4',

  path: { stroke: '$secondary' }
})

export const BarCodeField = styled('div', {
  flexCenter: 'row',
  py: '$2',
  px: '$4',

  width: '100%',

  radius: '$4',
  outline: 'none',

  bg: '$tertiary',

  input: {
    "&[type='text']": {
      flex: 1,
      height: '$6'
    }
  },

  svg: { height: '$6', path: { fill: '$error' } }
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',

  fontSize: '$4',
  fontWeight: '$5',
  p: '$10'
})

export const Close = styled(CloseIcon, {
  height: '$8',

  path: { fill: '$tertiary' }
})

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,

  pt: '$8',

  width: '$sm'
})

export const Section = styled('section', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  flex: 1,
  py: '$10',

  bg: '$secondary'
})

export const Style = styled('main', {
  display: 'flex',
  flexDirection: 'column',

  minHeight: `calc(100vh - ${theme.sizes[28].value})`
})
