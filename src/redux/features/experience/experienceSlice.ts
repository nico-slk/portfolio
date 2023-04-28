import { createSlice } from '@reduxjs/toolkit';
import { type Experience_EN, type Experience_ES } from '../../../interfaces/types';

const experiences: Experience_ES[] | Experience_EN[] = [];

export const experienceSlice = createSlice({
  name: 'experience',
  initialState: {
    experiences,
    isLoading: true
  },
  reducers: {
    getExperiences: (state, action) => {
      state.isLoading = false
      state.experiences = action.payload;
    }
  }
})

export default experienceSlice.actions
