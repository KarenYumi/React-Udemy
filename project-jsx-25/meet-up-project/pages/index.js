import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList"

export default function HomePage(props) {
  return (
    <MeetupList meetups={props.meetups} />
  )
}

export async function getStaticProps() {
  //fetch data from API

  const client = await MongoClient.connect(
    "mongodb+srv://karen:yumizinha01@cluster0.d1aiq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const meetupCollection = db.collection("meetups");

  const meetups = await meetupCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      }))
    },
    revalidate: 1,
  };
}