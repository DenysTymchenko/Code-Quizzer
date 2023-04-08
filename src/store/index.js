import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quizzesReducer } from './modules/quizzes';
import { quizReducer } from './modules/quiz';

const rootReducer = combineReducers({
  quizzesReducer,
  quizReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
