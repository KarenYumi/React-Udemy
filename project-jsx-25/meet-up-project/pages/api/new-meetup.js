import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://karen:yumizinha01@cluster0.d1aiq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = client.db();
    const meetupCollection = db.collection("meetups");

    const result = await meetupCollection.insertOne(data);
    console.log(result);

    res.status(201).json({ message: "Meetup inserted", result });


    client.close();

    res.status(405).json({ message: "Method not allowed" });
  }
}
