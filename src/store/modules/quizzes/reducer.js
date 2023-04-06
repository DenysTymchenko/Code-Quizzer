import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constant';
import thunks from './thunks';

/* eslint-disable no-param-reassign */
const quizzesSlice = createSlice({
  name: moduleName,
  initialState: {
    quizzes: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(thunks.fetchQuizzes.fulfilled, (state, { payload }) => {
      state.quizzes = payload;
      console.log(state.quizzes);
    });
  },
});

export default quizzesSlice.reducer;
export const { fetch } = quizzesSlice.actions;
