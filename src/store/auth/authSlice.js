import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  //nombre del slice con el que se vincula al store
  name: 'auth',
  //declaracion del estado inicial de las variables
  initialState: {
    status: 'cheking', // 'not-authenticated', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
  },
  //funciones que modifican el estado
  reducers: {
    login: (state, action) => {

    },
    logout: (state, payload) => { 

    },
    checkingCredentials: (state) => {
      state.status = 'checking';
    }
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
