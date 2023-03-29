import axios from './service';

const quizzes = {
  fetch: () => axios.get('/quizzes').then((data) => data),
  queryFetch: (query) => axios.get(`/quizzes?title_like=${query}`).then((data) => data),
};

export { quizzes };
