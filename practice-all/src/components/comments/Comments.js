import {useCallback, useEffect, useState} from 'react';
import useHttp from "../../hooks/use-http";
import {getAllComments} from "../../lib/api";

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import CommentsList from "./CommentsList";
import LoadingSpinner from "../UI/LoadingSpinner";

const Comments = ({id}) => {
    const [isAddingComment, setIsAddingComment] = useState(false);
    const {sendRequest, status, data: loadedComments, error} = useHttp(getAllComments)

    useEffect(() => {
        sendRequest(id)
    }, [sendRequest, id])

    const startAddCommentHandler = () => {
        setIsAddingComment(true);
    };

    const addedCommentHandler = useCallback(() => {
        sendRequest(id)
        setIsAddingComment(false)
    }, [sendRequest, id])

    let comments

    if (error) {
        comments = <p className='centered'>
            {error}
        </p>
    }

    if (status === 'pending') {
        comments = <div className='centered'>
            <LoadingSpinner/>
        </div>
    }

    if (status === 'completed' && (loadedComments || loadedComments.length > 0)) {
        comments = <CommentsList comments={loadedComments}/>
    }

    if (status === 'completed' && (!loadedComments || loadedComments.length === 0)) {
        comments = <p className='centered'>
            No comments on this quote yet
        </p>
    }


    return (
        <section className={classes.comments}>
            <h2>User Comments</h2>
            {!isAddingComment && (
                <button className='btn' onClick={startAddCommentHandler}>
                    Add a Comment
                </button>
            )}
            {isAddingComment && <NewCommentForm id={id} onAddedComment={addedCommentHandler}/>}
            {comments}
        </section>
    );
};

export default Comments;
