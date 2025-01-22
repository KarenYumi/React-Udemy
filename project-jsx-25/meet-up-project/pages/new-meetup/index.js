import { useRouter } from "next/router";
import Head from "next/head";
import { Fragment } from "react";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  const router = useRouter();


  async function addMeetupHandler(enteredMeetupData) {
    try {
      const response = await fetch("/api/new-meetup", {
        method: "POST",
        body: JSON.stringify(enteredMeetupData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed:", errorData);
        throw new Error(errorData.message || "Something went wrong");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error.message);
    }

    router.push("/")
  }


  return (
    <Fragment>
      <Head>
        <title>Add a new meetup</title>
        <meta
          name="Description"
          content="Add you own meetup"
        ></meta>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}