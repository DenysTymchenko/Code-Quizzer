import axios from './service';

const quizzes = {
  fetch: () => axios.get('/quizzes').then((data) => data), // for pages where cards and modals are displayed
  queryFetch: (query) => axios.get(`/quizzes?title_like=${query}`).then((data) => data), // for SearchBar
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
    category: title,
  }), // for CreateNewQuiz page
};

const quiz = {
  fetch: (quizTitle) => axios.get(`/${quizTitle}`).then((data) => data), // for QuizPage and it's components.
};

export { quizzes, quiz };
