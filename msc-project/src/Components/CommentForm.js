import { useState } from "react";
import useUser from "../Hooks/useUser";
import axios from "axios";

const CommentForm = ({articleName, onArticleUpdated}) =>{
    const [name, setName] = useState('');
    const [commentText, setCommentText] = useState('');
    const { user } = useUser();

    const addComment = async () => {
        const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token } : {};
        const response = await axios.post(`http://localhost:8000/article/${articleName}/comment`, {
            postedBy: name,
            text: commentText,
        }, {
            headers,
        });
        const updatedArticle = response.data;
        onArticleUpdated(updatedArticle);
        setName('');
        setCommentText('');
    }


    return (
        <div className="comment-form">
            <h3>Add Comment</h3>
            {user && <p>You are posting as {user.email}</p>}
            <label className="comment-input">
                Comment:
                <textarea value={commentText}
                onChange={e =>setCommentText(e.target.value)}
                rows="4"
                cols="50" />
            </label>
            <button className="add-comment" onClick={addComment}>Add Comment</button>
        </div>
    )
};

export default CommentForm;