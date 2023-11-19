// /api/new-event
import { MongoClient } from 'mongodb'


export default async function handler(req, res) {
  console.log("test1");
  if (req.method === 'POST') {
    const data = req.body;
    console.log("req.body:", data);
    // const { title, image, address, description } = data;
    try {
      const client = await MongoClient.connect('mongodb+srv://christopherkonakas:christopherkonakas@cluster0.xhi7lqn.mongodb.net/events?retryWrites=true&w=majority');
      const db = client.db();

      //collection->documents
      const eventsCollection = db.collection('events');
      const result = await eventsCollection.insertOne(data);
      console.log("result: ", result);
      client.close();

      // res.status(201, json({ message: 'Meetup inserted!' }))
      res.status(201).json({ message: 'Event inserted!' });

    } catch (error) {
      throw Error(error);
    }

  }
}

