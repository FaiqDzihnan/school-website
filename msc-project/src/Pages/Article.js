import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import NotFoundPage from './NotFoundPage';
import CommentList from '../Components/CommentList';
import CommentForm from '../Components/CommentForm';
import useUser from '../Hooks/useUser';
import './Article.css'


const Article = () => {
    const [articleInfo, setArticleInfo] = useState({title:"", content:[], likes: 0, comments:[], canLike: false });
    const {canLike} = articleInfo;
    const {name} = useParams();
    const { user, isLoading } = useUser();

    useEffect(() => {
        const loadArticleInfo = async () => {
            const token = user && await user.getIdToken();
            const headers = token ? { authtoken: token } : {};
            const response = await axios.get(`/article/${name}`, { headers });
            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo);
        }

        if (!isLoading) {
            loadArticleInfo();
        }
    }, [isLoading, user,name]);

    const articlePage = articleInfo.name;
    const addLikes = async () =>{
        const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token } : {};
        const response = await axios.put(`http://localhost:8000/article/${name}/like`, null, { headers });
        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);
    }

    if (!articlePage){
        return <NotFoundPage />
    }

    return(
        <>
            <div className='article-section'>
                <h3 className='article-title'>{articleInfo.title}</h3>
                <p className='article-content'>{articleInfo.content}</p>
                <br></br>
                {user 
                    ? <button className='like-button' onClick={addLikes}>{canLike ? 'Like' : 'Already Liked'}</button>
                    : <Link to="/login"><button className='login-to-like'>Login to like the article</button></Link>}
                <p>This article has {articleInfo.likes} likes!</p>
                <br></br>
                {user 
                    ? <CommentForm 
                        articleName = {name}
                        onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)}
                      />
                    : <Link to="/login"><button className='login-to-comment'>Login to add a comment</button></Link>}  
                <br></br>
                <CommentList comments={articleInfo.comments} />
            </div>
        </>
    );
}
export default Article;