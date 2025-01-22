import { MongoClient,  ObjectId } from "mongodb";

import MeetupDetail from "../../components/meetups/TempFile.js"

export default function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.adress}
      description={props.meetupData.description}
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://karen:yumizinha01@cluster0.d1aiq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const meetupCollection = db.collection("meetups");

  const meetups = await meetupCollection.find({}, {_id: 1}).toArray();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({ params: {meetupId: meetup._id.toString()}, })),
  };
}

export async function getStaticProps(context) {
  //fetch data for a single meetup

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://karen:yumizinha01@cluster0.d1aiq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const meetupCollection = db.collection("meetups");

  const selectedMeetup = await meetupCollection.findOne({_id: new ObjectId(meetupId), });

  console.log(selectedMeetup);

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}