import React, {useEffect} from 'react';
import {Link, Route, useParams, useRouteMatch} from 'react-router-dom'
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import {getSingleQuote} from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const SingleQuote = () => {
    const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true)
    const match = useRouteMatch()
    const params = useParams()
    const id = params.quoteId

    useEffect( () => {
         sendRequest(id)
    }, [sendRequest, id])

    if (status === 'pending') {
        return  <div className='centered'>
            <LoadingSpinner />
        </div>
    }

    if (error) {
        return <p className='centered'>
            {error}
        </p>
    }

    if (!loadedQuote) {
        return <p>No quote found</p>
    }

    return (
        <>
            <h1 className='centered'>
                {`Single Quote`}
            </h1>
            <HighlightedQuote quote={loadedQuote} />
            <Route path={`${match.path}`} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={{
                        pathname: `${match.url}/comments`
                    }} >
                        Load Comments
                    </Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments id={id}/>
            </Route>
        </>

    );
};

export default SingleQuote;
