import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from './constant';
import { quizzes } from '../../../api';

const fetchQuizzes = createAsyncThunk(`${moduleName}/fetchQuizzes`, async () => {
  const { data } = await quizzes.fetch();
  return data;
});

export default {
  fetchQuizzes,
};
