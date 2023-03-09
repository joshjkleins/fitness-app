const express = require('express');
const app = express();
const { MongoClient} = require('mongodb');
require("dotenv").config();

app.get('/', (req, res) => {
   const client = new MongoClient(process.env.MONGODB_URI);

   async function run() {
    const dbName = client.db('Exercises')
    const collection = dbName.collection('Exercises')

    const result = await collection.find({}).toArray()

    res.send(result)

   }
   run()
})

app.listen(process.env.PORT, () => {
    console.log("Server is listening!")
})