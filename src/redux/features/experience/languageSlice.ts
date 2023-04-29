import { createSlice } from '@reduxjs/toolkit';

const language: string = 'es'

export const languageSlice = createSlice({
  name: 'formation',
  initialState: {
    language,
    isLoading: true
  },
  reducers: {
    getLanguage: (state, action) => {
      if (action.payload === 'getLanguage') {
        state.isLoading = false;
      }
    },
    setLanguage: (state, action) => {
      state.isLoading = false;
      state.language = action.payload;
    }
  }
})

export default languageSlice.actions
