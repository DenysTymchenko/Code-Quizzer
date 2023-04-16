import axios from './service';

const quizzes = {
  fetch: () => axios.get('/quizzes').then((data) => data),
  queryFetch: (query) => axios.get(`/quizzes?title_like=${query}`).then((data) => data),
  add: ({
    title,
    description,
    time,
    img,
  }) => axios.post('/quizzes', {
    title,
    description,
    time,
    img,
  }),
};

const quiz = {
  fetch: (quizTitle) => axios.get(`/${quizTitle}`).then((data) => data),
};

export { quizzes, quiz };
