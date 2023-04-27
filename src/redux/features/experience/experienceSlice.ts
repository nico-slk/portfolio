import { createSlice } from '@reduxjs/toolkit';

export const experienceSlice = createSlice({
  name: 'experience',
  initialState: [],
  reducers: {
    getExperiences: (state, action) => {
      state = action.payload;
      console.log(state);
    }
  }
})

export const { getExperiences } = experienceSlice.actions
export default experienceSlice.actions
