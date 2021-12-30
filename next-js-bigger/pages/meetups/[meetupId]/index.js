import {useRouter} from "next/router";
import MeetupDetail from "../../../components/meetups/MeetupDetail";

const SingleMeetup = (props) => {
    const meetupId = useRouter().query.meetupId

    return (
        <MeetupDetail
            meetupId={meetupId}
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
            title="some title"
            address="some address"
            description="some description"
        />
    );
};

export default SingleMeetup;
