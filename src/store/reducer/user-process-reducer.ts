import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../constants.ts';
import { UserData } from '../../types/user.ts';
import { checkAuthAction, loginAction, logoutAction } from '../action/action.ts';

type UserProcessState = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
};

const initialState: UserProcessState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
};

const userProcessSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userData = null;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userData = null;
      });
  },
});

export const userProcessReducer = userProcessSlice.reducer;
