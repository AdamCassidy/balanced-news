import React from 'react'
import Article from "./Article"

export default function ArticleList({articles}) {
    return (
        <div>
            articles.map(article => {
                return <Article key={article.id} article={article}/>
            })
        </div>
    )
}
