import { configureStore } from '@reduxjs/toolkit';
import companyReducer from '../slices/SlicesCompany';
import userGet from '../slices/SliceGetUsers'

export const store = configureStore({
  reducer: {
    company: companyReducer,
    getUsers: userGet,
  },
});