import { createSlice } from '@reduxjs/toolkit';
import { type Formation_EN, type Formation_ES } from '../../../interfaces/types';

const formation: Formation_EN[] | Formation_ES = [];

export const formationSlice = createSlice({
  name: 'formation',
  initialState: {
    formation,
    isLoading: true
  },
  reducers: {
    getExperiences: (state, action) => {
      state.isLoading = false
      state.formation = action.payload;
    }
  }
})

export default formationSlice.actions
