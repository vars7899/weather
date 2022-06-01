import React, { useEffect, useState } from "react";
import Message from "../Message/Message";
import Spinner from "../Spinner/Spinner";
import Article from "./Article.js/Article";

const News = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);
  const NEWS_URL =
    "https://newsapi.org/v2/everything?q=nature&from=2021-11-29&sortBy=popularity&apiKey=";
  const NEWS_API_KEY = "fbb7fb547f8346899873d50665fc2aca";
  //   News data fetching function
  const fetchData = async () => {
    try {
      const res = await fetch(NEWS_URL + NEWS_API_KEY);
      const data = await res.json();
      console.log(data.articles);
      await setLoading(false);
      await setArticles(data.articles);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return <Spinner />;
  } else if (error) {
    return <Message>{error}</Message>;
  } else {
    return (
      <div className="news">
        {articles.map((item, index) => (
          <Article key={index} article={item} />
        ))}
      </div>
    );
  }
};

export default News;
