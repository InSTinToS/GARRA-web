import { IUserStore } from './types'

import { signInExtraReducers } from './extraReducers/signIn'
import { verifyAuthenticationExtraReducers } from './extraReducers/verifyAuthentication'
import { logout } from './reducers/logout'
import { update } from './reducers/update'

import { createSlice } from '@reduxjs/toolkit'

const initialState: IUserStore = { loading: undefined, user: undefined }

const extraReducers = (builder: any) => {
  signInExtraReducers(builder), verifyAuthenticationExtraReducers(builder)
}

const userStore = createSlice({
  initialState,
  extraReducers,
  name: 'userStore',
  reducers: {
    logout,
    update
  }
})

export { userStore }
