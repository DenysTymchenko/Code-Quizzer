import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constant';
import thunks from './thunks';

/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
const quizSlice = createSlice({
  name: moduleName,
  initialState: {
    quiz: {},
    quizExists: false,
    questions: [],
    answers: [],
    time: 0,
    score: 0,
    index: 0,
  },
  reducers: {
    setQuestions(state) {
      state.questions = state.quiz.questions;
    },
    setAnswers(state) {
      state.answers = state.questions[state.index] ? state.questions[state.index].answers : state.questions[0].answers;
    },
    setTime(state) {
      state.time = state.quiz.time;
    },
    appendScore(state) {
      state.score++;
    },
    nullifyScore(state) {
      state.score = 0;
    },
    appendIndex(state) {
      state.index++;
    },
    nullifyIndex(state) {
      state.index = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunks.fetchQuiz.fulfilled, (state, { payload }) => {
      if (payload) {
        state.quiz = payload;
        state.quizExists = true;
        state.questions = state.quiz.questions;
      } else {
        state.questions = [];
        state.quizExists = false;
      }
    });
  },
});

export default quizSlice.reducer;
export const {
  setQuestions,
  setAnswers,
  setTime,
  appendScore,
  nullifyScore,
  appendIndex,
  nullifyIndex,
} = quizSlice.actions;
