import { configureStore } from '@reduxjs/toolkit';
import squaresReducer from './squares-slice';

const store = configureStore({
  reducer: {
    squares: squaresReducer,
  },
  devTools: true,
});

export default store;