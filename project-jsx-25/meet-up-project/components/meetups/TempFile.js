import classes from "./TempFile.module.css";

//esse srq é o MeetupDetail.js porem o vsc n está colaborando

export default function MeetupDetail(props) {
  return (
    <segment className={classes.detail}>
      <img
        src={props.image}
        alt={props.alt}
      ></img>
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </segment>

  )

}
