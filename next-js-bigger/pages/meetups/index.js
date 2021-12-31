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

const Meetups = (props) => {

    return (
        <>
            <MeetupList meetups={props.meetups} />
        </>
    );
};

// export const getStaticProps = () => { // prerender this page on server and fetching data to it
//     // some logic
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         },
//         revalidate: 1  //seconds to re pre render from next
//     }
// }

export const getServerSideProps = (context) => { // the difference is that this one not runs on build, but always runs after deployment
    //any logic will run on server

    const req = context.req // we use this function is we need these(req, res) and if we need it to be regenerated on every request
    const res = context.res

    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    }
}

export default Meetups;
