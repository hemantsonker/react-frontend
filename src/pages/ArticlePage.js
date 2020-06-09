import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import articles from './article-content';
import CommentsList from '../components/CommentListComp';
import NotFoundPage from './pageNotFound';
import UpvotesSection from '../components/UpvotesSection';

// const ArticlePage=()=>(
// <h1>Article Page</h1>
// );

const ArticlePage=()=>{
    const { name } =useParams();
    const [articleInfo,setArticleInfo]=useState({upvotes:0,comments:[]});
  

    useEffect(()=>{
       // setArticleInfo({upvotes:4})
        const fetchArticleInfo=async ()=>{

            const result =await fetch(`/api/articles/${name}`);
            const body=await result.json();
            console.log(body);
            setArticleInfo(body);
        };
        fetchArticleInfo();

    },[name]);

    const matchingArticle=articles.find(article=>article.name===name);
    

    return matchingArticle?(
        <>
        <h1>{matchingArticle.title}</h1>
        <UpvotesSection upvotes={articleInfo.upvotes} articleName={name} setArticleInfo={setArticleInfo} />
        {matchingArticle.content.map((paragraph, key) => <p key={key}>{paragraph}</p>)}

       
        <CommentsList comments={articleInfo.comments} articleName={name} setArticleInfo={setArticleInfo} />
        </>

    ):(
        <NotFoundPage />
    );
    

}

export default ArticlePage