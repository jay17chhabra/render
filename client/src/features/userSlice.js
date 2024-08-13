import { createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: localStorage.getItem('jwtToken')
      ? jwtDecode(localStorage.getItem('jwtToken'))
      : null,
    isLoading: true,
  },

  reducers: {
    loginUser: (state, action) => {
      console.log('Logging in user with token:', action.payload.token);
      localStorage.setItem('jwtToken', action.payload.token);
      state.userInfo = action.payload;
      state.isLoading = action.payload.loading;
      console.log('User info after login:', state.userInfo);
    },
    logoutUser: (state, action) => {
      console.log('Logging out user');
      localStorage.removeItem('jwtToken');
      state.userInfo = null;
    },

    updateUser: (state, action) => {
      console.log('Updating user with token:', action.payload.token);
      localStorage.setItem('jwtToken', action.payload.token);
      state.userInfo = action.payload;
      console.log('User info after update:', state.userInfo);
    },
  },
});

export const { loginUser, logoutUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
