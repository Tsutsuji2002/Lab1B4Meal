import { configureStore } from '@reduxjs/toolkit';
import mealsReducer from './reducers/meals';

export const store = configureStore({
  reducer: {
    meals: mealsReducer,
  },
});
