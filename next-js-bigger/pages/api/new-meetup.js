// /api/new-meetup     is going to be the endpoint url
import {MongoClient} from "mongodb";

const handler = async (req, res) => {
   if (req.method === 'POST') {
       const data = req.body
       //
       // const client = await MongoClient.connect('mongodb+srv://mthrfckr:0YRCwLmXQkFAygzH@cluster0.l1nje.mongodb.net/meetups?retryWrites=true&w=majority')
       //
       // const db = client.db
       //
       // const meetupsCollection = db.collection('meetups')
       // const result = await meetupsCollection.insertOne(data)
       //
       // console.log(result)
       //
       // await client.close()
       //
       // res.status(201).json({message: 'Meetup inserted'})

       const { MongoClient } = require('mongodb');
       const uri = "mongodb+srv://mthrfckr:0YRCwLmXQkFAygzH@cluster0.l1nje.mongodb.net/meetups?retryWrites=true&w=majority";
       const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
       client.connect(err => {
           const collection = client.db("meetups").collection("meetups");
           const result = collection.insertOne(data)
           console.log(result)
           client.close();
           res.status(201).json({message: 'Meetup inserted'})
       });


   }
}

export default handler
