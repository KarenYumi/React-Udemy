import { useEffect, useState } from "react";

import MeetupList from "../components/meetups/MeetupList"

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "1111",
    description: "This a first"
  },
  {
    id: "m2",
    title: "Second",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "2222",
    description: "This a first"
  },

]

export default function HomePage(props) {
  // const [loadedMeetups, setLoadedMeetups] =  useState([]);

  // useEffect(() => {
  //                                                               send a http request and fetch data
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // },[]);

  return (
      <MeetupList meetups={props.meetups} />
  )
}


export async function getStaticProps() {
  //fetch data from API
  return{
    props: {
      meetups: DUMMY_MEETUPS
    },
    relavidate: 1
  };
}