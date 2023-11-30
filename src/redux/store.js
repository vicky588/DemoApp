import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {api} from './productApi';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: true,
});
