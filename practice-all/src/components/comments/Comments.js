import { useState } from 'react';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';

const Comments = ({id}) => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm />}
      <p>Comments... for the quote with ID: {id}</p>
    </section>
  );
};

export default Comments;
