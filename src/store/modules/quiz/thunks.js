import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from './constant';
import { quiz } from '../../../api';

const fetchQuiz = createAsyncThunk(`${moduleName}/fetchQuiz`, async (name) => {
  try {
    const { data } = await quiz.fetch(name);
    return data;
  } catch (e) {
    console.log(e);
  }
});

export default {
  fetchQuiz,
};
