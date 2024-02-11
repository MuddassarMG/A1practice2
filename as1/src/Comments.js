// Comments.js
import React, { useState } from 'react';

//created function to add a new comment
const Comments = ({ comments, addComment }) => {
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    //checking that the comment is empty or not.
    if (newComment.trim() !== '') {
      addComment(newComment);
      setNewComment('');
    }
  };

  return (
    <div className="comments">
      <h2>Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <p>{comment}</p>
          </li>
        ))}
      </ul>
      <textarea
        placeholder="Add a comment"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      ></textarea>
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
};

export default Comments;
