import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TUser } from './types';

export type TUserState = { user: TUser };
const initialState = {
  user: {
    email: '',
    name: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TUser>) => {
      state.user = action.payload;
    },
    resetUser: (state) => {
      state.user = initialState.user;
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
