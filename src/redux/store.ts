import { configureStore } from '@reduxjs/toolkit';
import { experienceSlice } from './features/experience/experienceSlice';

export const store = configureStore({
  reducer: {
    experience: experienceSlice.reducer
  }
});

export type StateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch
