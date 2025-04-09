import { useState } from "react";
import { useEffect } from "react";
import NewsItem from "./NewsItem";


const NewsBoard = ({category}) => {

    const[articles,setArticle]=useState([]);

   useEffect(() => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data); // 🔍 Check for errors or empty result
      setArticle(data.articles || []);
    })
    .catch(err => {
      console.error("Failed to fetch news:", err);
    });
}, [category]);


  return (
    <div>
        <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
    {articles.map((news,index)=>{
        return <NewsItem 
        key={index} 
        title={news.title} 
        description={news.description}
        src={news.urlToImage}
        url={news.url}
        />
    })}
    </div>
  )
}

export default NewsBoard
