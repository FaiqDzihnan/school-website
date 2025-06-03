const CommentList = ({comments}) => (
    <>
    <h3 className="comment-title">Comments</h3> 
    {comments.map (comment => (
        <div className="comment" key={comment.postedBy + ': ' + comment.text}>
            <h4 className="comment-name">{comment.postedBy}</h4>
            <p className="comment-text">{comment.text}</p>
        </div>
    ))} 
    </>
);

export default CommentList;