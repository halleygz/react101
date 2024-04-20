import React from 'react'
import './article.css'

const Article = ({imageU, title}) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imageU} alt="p" />
        
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>Sep 26, 2021</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
      
    </div>
  )
}

export default Article
