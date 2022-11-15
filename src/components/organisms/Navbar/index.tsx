/* eslint-disable @next/next/no-img-element */
import { Content, DefaultAvatar, Logout, Style } from './styles'

import { useRouter } from 'next/router'
import { ReactElement } from 'react'

const Navbar = () => {
  const router = useRouter()

  return (
    <Style>
      <Content className='logo'>
        <button
          type='button'
          onClick={() => {
            router.push('/requests')
          }}
        >
          <img src='/logo.png' alt='Garra logo' />
        </button>

        <div>
          <button
            type='button'
            onClick={() => {
              router.push('/profile')
            }}
          >
            <DefaultAvatar />
          </button>

          <button
            type='button'
            onClick={() => {
              router.push('/')
            }}
          >
            <Logout />
          </button>
        </div>
      </Content>
    </Style>
  )
}

export const getNavbarLayout = (page: ReactElement) => (
  <>
    <Navbar />

    {page}
  </>
)

export default Navbar
