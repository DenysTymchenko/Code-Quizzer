import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quizzesReducer } from './modules/quizzes';

const rootReducer = combineReducers({
  quizzesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
