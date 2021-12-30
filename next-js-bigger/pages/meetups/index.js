import React, {useEffect, useState} from 'react';
import MeetupList from "../../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'First meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some addres, 12312 Some City',
        description: 'This iS the first meetup'
    },
    {
        id: 'm2',
        title: 'Second meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some addres, 12dasda312 Some City',
        description: 'This iS the second meetup'
    },
    {
        id: 'm3',
        title: 'Third meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some addres, 12sdasdxdsasd312312 Some City',
        description: 'This iS the third meetup'
    },

]

const Meetups = () => {
    const [loadedMeetups, setLoadedMeetups] = useState([])

    useEffect(() => {
        // send request
        setLoadedMeetups(DUMMY_MEETUPS)
    }, [])

    return (
        <>
            <MeetupList meetups={loadedMeetups} />
        </>
    );
};

export default Meetups;
