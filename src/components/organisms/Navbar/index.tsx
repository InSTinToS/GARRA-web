/* eslint-disable @typescript-eslint/no-extra-semi */

/* eslint-disable @next/next/no-img-element */
import { Content, DefaultAvatar, Logout, Style } from './styles'

import { useAppDispatch } from '@app/hooks/useAppDispatch'

import { userStore } from '@app/store/user'
import { verifyAuthenticationThunk } from '@app/store/user/extraReducers/verifyAuthentication'

import { useRouter } from 'next/router'
import { ReactElement, useEffect } from 'react'

const Navbar = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  useEffect(() => {
    // ;(async () => {
    //   const res = await dispatch(verifyAuthenticationThunk({}))
    //   if (res?.payload?.id)
    //     router.push(res?.payload?.register ? '/admin' : '/requests')
    //   else router.push('/')
    // })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
              dispatch(userStore.actions.logout())
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
