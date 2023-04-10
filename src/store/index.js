import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quizzesReducer } from './modules/quizzes';
import { quizReducer } from './modules/quiz';
import { favoritesReducer } from './modules/favorites';

const rootReducer = combineReducers({
  quizzesReducer,
  quizReducer,
  favoritesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
