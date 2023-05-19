import { configureStore } from '@reduxjs/toolkit';
import companyReducer from '../slices/SlicesCompany';

export const store = configureStore({
  reducer: {
    company: companyReducer,
  },
});