import { createSlice } from '@reduxjs/toolkit'
import { type Project } from '../../../interfaces/types'

const project: Project[] = [];

export const projectCardSlice = createSlice({
  name: 'projects',
  initialState: {
    project,
    isLoading: true
  },
  reducers: {
    getProjects: (state, action) => {
      state.isLoading = false
      state.project = action.payload
    }
  }
})

export default projectCardSlice.actions
