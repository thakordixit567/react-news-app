import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBord = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);
  return (
    <div>
      <h3 className="text-center ">
        Latest <span className="badge bg-danger ">News</span>{" "}
      </h3>

      <div>
        {articles.map((news, index) => {
          return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          );
        })}
      </div>
      <footer>
        <div
          className="text-center p-3 bg-body-tertiary text-light"
          data-bs-theme="dark"
        >
          © 2024 Copyright:
          <span>
            {" "}
            <a
              className="text-light font-weight-bold"
              href="https://github.com/thakordixit567" target="_blank"
            >
              Dixit Code
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default NewsBord;
