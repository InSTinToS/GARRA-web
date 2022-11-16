import { api } from '@app/services/api'

import { createAsyncThunk } from '@reduxjs/toolkit'

const verifyAuthentication = async (_: any, { getState }: any) => {
  try {
    const { userStore } = getState()

    if (userStore.user !== undefined) return userStore.user

    const token = localStorage.getItem('@GARRA-token')

    if (!token) return undefined

    const { data } = await api.get('/user', {
      headers: { Authorization: `Bearer ${token}` }
    })

    const adminsRes = await api.get(`/admins/${data.user.id}`)

    const register = adminsRes.data.admin.register

    return { ...data.user, token, register }
  } catch (error: any) {
    return { error: 'Error inesperado tente novamente mais tarde' }
  }
}

const verifyAuthenticationThunk = createAsyncThunk(
  'userStore/verify-authentication',
  verifyAuthentication
)

const verifyAuthenticationExtraReducers = ({ addCase }: any) => {
  addCase(verifyAuthenticationThunk.pending, (state: any) => ({
    ...state,
    loading: true
  }))

  addCase(
    verifyAuthenticationThunk.fulfilled,
    (state: any, { payload }: any) => ({
      ...state,
      user: payload,
      loading: false
    })
  )

  addCase(verifyAuthenticationThunk.rejected, (state: any) => ({
    ...state,
    loading: false
  }))
}

export { verifyAuthenticationThunk, verifyAuthenticationExtraReducers }
