import {useRouter} from "next/router";
import MeetupDetail from "../../../components/meetups/MeetupDetail";

const SingleMeetup = (props) => {
    const {meetupId, image, title, address, description} = props.meetupData

    return (
        <MeetupDetail
            meetupId={meetupId}
            imageUrl={image}
            title={title}
            address={address}
            description={description}
        />
    );
};

export const getStaticPaths = async () => {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            },
            {
                params: {
                    meetupId: 'm3'
                }
            },
        ]
    }
}

export const getStaticProps = async (ctx) => {
    const meetupId = ctx.params.meetupId

    return {
        props: {
            meetupData: {
                id: meetupId,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
                title: "some title",
                address: "some address",
                description: "some description"
            }
        }
    }
}


export default SingleMeetup;
