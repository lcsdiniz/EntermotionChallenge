import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.openai.com/v1/chat/completions',
})