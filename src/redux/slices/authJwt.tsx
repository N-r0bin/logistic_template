import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { User } from '../models/AccountUserModel';
import axios from 'axios';
import { CONSTS } from './Const';

type AuthJWTState = {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: User;
};

const initialState: AuthJWTState = {
  isLoading: false,
  isAuthenticated: false,
  user: {
    id: '', displayName: '', email: '',
    password: '',
    userName: '',
    access_token: ''
  }
};

const slice = createSlice({
  name: 'authJwt',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    registerSuccess(state, action: PayloadAction<User>) {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logoutSuccess(state) {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.user = initialState.user;
    }
  }
});

export const { startLoading, loginSuccess, registerSuccess, logoutSuccess } = slice.actions;
export default slice.reducer;

const setSession = (accessToken: string | null) => {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem('accessToken');
    delete axios.defaults.headers.common.Authorization;
  }
};

const setEmail = (email: string | null) => {
  if (email) {
    localStorage.setItem('Email', email);
    // axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem('Email');
    // delete axios.defaults.headers.common.Authorization;
  }
};

const setCustomerId = (customerId: string | null) => {
  if (customerId) {
    localStorage.setItem('Customer', customerId);
    // axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem('Customer');
    // delete axios.defaults.headers.common.Authorization;
  }
};

export const login = (email: string, password: string): any => {
  return async (dispatch: Dispatch) => {
    dispatch(startLoading());
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      };

      const response = await fetch(CONSTS.login, options);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      dispatch(loginSuccess(result.data));
    } catch (error: any) {
      console.error('Login Error:', error.message);

    }
  };
};
export const logout = () => async (dispatch: any) => {
  dispatch(startLoading());
  try {
    dispatch(logoutSuccess());
  } catch (error) {
  }
};