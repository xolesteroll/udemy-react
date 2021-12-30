import React from 'react';

const MeetupDetail = (props) => {
    return (
        <>
            <img src={props.imageUrl} alt={props.title}/>
            <h1>Some meetup with id: {props.meetupId}</h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </>
    );
};

export default MeetupDetail;
