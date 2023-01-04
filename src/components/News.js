import React, { useEffect, useState } from "react";
import Card from "./Card";
import { fetchNews } from "../assets/js/common";

function News(props) {
  const [news, setNews] = useState([])

  useEffect(() => {
    async function loadNews() {
      const response = await fetchNews();
      setNews(response.data.articles);
    }

    loadNews();
  }, [])

  console.log(news)

  return (
    <div>
      <div className="all__news">
        {news
          ? news?.map((articles) => (
              <Card data={articles} key={articles.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default News;
