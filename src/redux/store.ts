import { configureStore } from '@reduxjs/toolkit';
import { experienceSlice } from './features/experience/experienceSlice';
import { formationSlice } from './features/experience/formationSlice';
import { projectCardSlice } from './features/experience/projectCardsSlice';
import { languageSlice } from './features/experience/languageSlice';

export const store = configureStore({
  reducer: {
    experience: experienceSlice.reducer,
    formation: formationSlice.reducer,
    project: projectCardSlice.reducer,
    languages: languageSlice.reducer
  }
});

export type StateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch
