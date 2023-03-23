import axios from './service';

const quizzes = {
  fetch: () => axios.get('/quizzes').then((data) => data),
};

export { quizzes };
