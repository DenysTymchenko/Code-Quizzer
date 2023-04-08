import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from './constant';
import { quiz } from '../../../api';

const fetchQuiz = createAsyncThunk(`${moduleName}/fetchQuiz`, async (name) => {
  const { data } = await quiz.fetch(name);
  return data;
});

export default {
  fetchQuiz,
};
