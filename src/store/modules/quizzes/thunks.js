import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from './constant';
import { quizzes } from '../../../api';

const fetchQuizzes = createAsyncThunk(`${moduleName}/fetchQuizzes`, async () => {
  const { data } = await quizzes.fetch();
  return data;
});

const fetchQuizzesQuery = createAsyncThunk(`${moduleName}/fetchQuizzes()`, async (query) => {
  const { data } = await quizzes.queryFetch(query);
  return data;
});

export default {
  fetchQuizzes,
  fetchQuizzesQuery,
};
