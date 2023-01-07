import React, { useEffect, useState } from "react";
import NewsCard from "./Card";
import { fetchNews } from "../assets/js/common";

function News(props) {
  const[search, setSearch] = useState(props.searchTerm);
  const [news, setNews] = useState([]);

 
    async function loadNews() {
      const response = await fetchNews(props.searchTerm);
      setNews(response.data.articles);
    }

    useEffect(() => {
      
    loadNews();
  }, [])
  if (search !== props.searchTerm){
    setSearch(props.searchTerm)
    setNews([]);
    loadNews();
  }

  // console.log(news)

  return (
    <>
     {news
          ? news?.map((articles) => (
              <NewsCard data={articles} key={articles.url} />
              ))
          : "Loading"}
    </>
       
      
   
  );
}

export default News;
