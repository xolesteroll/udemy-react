import React from 'react';
import {Route, useParams} from 'react-router-dom'
import Comments from "../components/comments/Comments";

const SingleQuote = () => {
    const params = useParams()
    const id = params.quoteId
    return (
        <>
            <h1>
                {`Single Quote with an ID: ${id}`}
            </h1>
            <Route path={`/quotes/${id}/comments`}>
                <Comments id={id}/>
            </Route>
        </>

    );
};

export default SingleQuote;
