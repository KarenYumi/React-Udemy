import MeetupList from "../components/meetups/MeetupList"

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address:"1111",
    description: "This a first"
  },
  
]

export default function HomePage(){
  return(
    <MeetupList meetups={}/>
  )
}