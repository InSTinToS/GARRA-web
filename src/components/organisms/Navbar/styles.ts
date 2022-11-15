import { styled } from '@app/styles'

import DefaultAvatarIcon from '@app/components/atoms/icons/DefaultAvatar'
import LogoutIcon from '@app/components/atoms/icons/Logout'

export const Logout = styled(LogoutIcon, {
  height: '$4',

  path: { fill: '$secondary' }
})

export const DefaultAvatar = styled(DefaultAvatarIcon, {
  fill: '$primary',
  height: '$12'
})

export const Content = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  size: '100%',
  maxWidth: '$xl'
})

export const Style = styled('nav', {
  flexCenter: 'row',

  px: '$10',
  height: '$28',
  width: '100vw',

  boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.4)'
})
