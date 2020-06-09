import React from 'react';
import articles from './article-content'
import ArticlesListingComp from '../components/ArticleListComp'


const ArticleListPage=()=>(
    <>
    <h1>Articles</h1>
    <ArticlesListingComp articles={articles}/>
  
    </>
);

export default ArticleListPage