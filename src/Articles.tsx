import React from 'react';
import Article from './Article';
import type { ArticleProps} from './Article';
import nextId from "react-id-generator";

interface Props { 
    articles: ArticleProps[];
}

const Articles: React.FC<Props> = ({articles}): JSX.Element => {
    return (
        <ul>
            {articles.map(article => <li><Article key={article.toString()} url={article.url} title={article.title} urlToImage={article.urlToImage}></Article></li>)}
        </ul>        
    );
}

export default Articles
