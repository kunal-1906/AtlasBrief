import { useState } from "react";
import { useEffect } from "react";
import NewsItem from "./NewsItem";


const NewsBoard = ({category}) => {

    const[articles,setArticle]=useState([]);

  useEffect(() => {
  const url = `/api/news?category=${category}`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data); // check what's returned
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
