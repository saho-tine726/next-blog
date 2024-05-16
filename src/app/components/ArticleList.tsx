import React from 'react'

import { Article } from '@/app/types/types';
import ArticleCard from './ArticleCard';

type ArticleListProps = {
  articles: Article[];
}

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {articles.map((article) => (
        <ArticleCard article={article} key={article.id} />
      ))}
    </div>
  )
}

export default ArticleList