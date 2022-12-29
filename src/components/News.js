import React, { useContext } from "react";
import { command } from "../command";
import NewsArticleSite from "./NewsArticleSite";

function News(props) {
  const { data } = useContext(command);
  console.log(data);

  return (
    <div>
      <h1 className="head__text">News App </h1>
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <NewsArticleSite data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default News;
