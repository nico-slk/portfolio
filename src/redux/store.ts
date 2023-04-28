import { configureStore } from '@reduxjs/toolkit';
import { experienceSlice } from './features/experience/experienceSlice';
import { formationSlice } from './features/experience/formationSlice';
import { projectCardSlice } from './features/experience/projectCardsSlice';

export const store = configureStore({
  reducer: {
    experience: experienceSlice.reducer,
    formation: formationSlice.reducer,
    project: projectCardSlice.reducer
  }
});

export type StateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch
