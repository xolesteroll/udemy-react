import React from 'react';
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetUp = () => {
    const addMeetUpHandler = async (enteredMeetUpData) => {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetUpData),
            header: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()

        console.log(data)
    }


    return (
        <NewMeetupForm onAddMeetup={addMeetUpHandler}/>
    );
};

export default NewMeetUp;
