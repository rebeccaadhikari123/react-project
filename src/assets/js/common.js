import axios from "axios";

export const fetchNews = async (searchTerm = '') => {
  if (searchTerm) {
    return axios.get(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=17e3958800ec4c7e913cc29b812579d4`); 
  }

  return axios.get("https://newsapi.org/v2/everything?q=Science&Technology&apiKey=17e3958800ec4c7e913cc29b812579d4");
}