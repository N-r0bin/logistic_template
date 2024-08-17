import { createSlice } from '@reduxjs/toolkit';
import { dispatch } from '../store';
// utils
import {
  Profile,
  UserData,
} from "../models/UserModel";
import axios from 'axios';

type UserState = {
  isLoading: boolean;
  token: string | null;
  error: string | null;
  myProfile: null | Profile;
  users: UserData[];
};

const initialState: UserState = {
  isLoading: false,
  token: null,
  error: null,
  myProfile: null,
  users: [],
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    startLoading(state) {
      state.isLoading = true;
    },

    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    getProfileSuccess(state, action) {
      state.isLoading = false;
      state.myProfile = action.payload;
    },

    getUsersSuccess(state, action) {
      state.isLoading = false;
      state.users = action.payload;
    },

    logoutUser(state) {
      state.token = null;
    }
  },

});


export default slice.reducer;

// Actions
export const { logoutUser } = slice.actions;

export function getProfile() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/user/profile');
      dispatch(slice.actions.getProfileSuccess(response.data.profile));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getUsers() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/user/all');
      dispatch(slice.actions.getUsersSuccess(response.data.users));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
