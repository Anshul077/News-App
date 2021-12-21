import axios from "axios";
import React, { useEffect, useState } from "react";
import EntertainmentNewsItem from "./EntertainmentNewsItem";
import SportsNewsItem from "./SportsNewsItem";
import "../News.css"

function News({bgColor}) {
  const [SportsNews, setSportsNews] = useState();
  const [EntertainmentNews, setEntertainmentNews] = useState();

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=9236c57339e84be09090bca5bbb4d609"
      )
      .then((res) => {
        setSportsNews(res.data);
      })
      .catch((error) => alert("error"));
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=9236c57339e84be09090bca5bbb4d609"
      )
      .then((res) => {
        setEntertainmentNews(res.data);
      })
      .catch((error) => alert("error"));
  }, []);

  return (
    <div>
      <div className="cont">  
      <h2>SPORTS NEWS</h2>
      <div className="sec-cont">
      {
      SportsNews
        ? SportsNews.articles.map((element) => {
            return (
              <SportsNewsItem 
                key={element.title}
                title={element.title.slice(0,50)}
                description={element.description?element.description.slice(0,95):element.description}
                image={element.urlToImage}
                moreNews={element.url}
                color={bgColor}
              />
            );
          })
        : ""}
        </div>
</div>
<br />
<div className="cont">  
      <h2>ENTERTAINMENT NEWS</h2>
      <div className="sec-cont">
      {EntertainmentNews
        ? EntertainmentNews.articles.map((element) => {
            return (
              <EntertainmentNewsItem
                key={element.title}
                title={element.title.slice(0,50)}
                description={element.description?element.description.slice(0,95):element.description}
                image={element.urlToImage}
                moreNews={element.url}
                color={bgColor}
              />
            );
          })
        : ""}
        </div>
</div>
    </div>
  );
}

export default News;
