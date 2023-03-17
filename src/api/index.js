import axios from "axios";

const quizzes = {
  fetch: () => axios.get('/quizzes').then(data => data),
};

export { quizzes };
