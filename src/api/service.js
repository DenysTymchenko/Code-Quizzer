import axios from 'axios';

export default axios.create({
  baseURL: 'https://63ef5f59271439b7fe6d10b5.mockapi.io',
  headers: { 'Content-Type': 'application/json' },
});
