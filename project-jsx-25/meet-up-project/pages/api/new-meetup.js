import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    if (!title || !image || !address || !description) {
      return res.status(400).json({ message: "Invalid input data" });
    }

    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://karen:yumizinha01@cluster0.d1aiq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      );
      const db = client.db();
      const meetupCollection = db.collection("meetups");

      const result = await meetupCollection.insertOne(data);
      console.log(result);

      res.status(201).json({ message: "Meetup inserted", result });
    } catch (error) {
      console.error("Failed to insert meetup:", error.message, error.stack);
      res.status(500).json({ message: "Failed to insert meetup", error: error.message });
    } finally {
      if (client) {
        client.close();
      }
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
