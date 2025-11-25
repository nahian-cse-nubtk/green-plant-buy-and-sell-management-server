require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

//middleware
app.use(cors())
app.use(express.json())


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    await client.connect();
    const db = client.db('green_plant_db')
    const plantCollection = db.collection('plants')

    app.get('/products', async(req,res)=>{
        const query ={}
        const cursor = plantCollection.find(query)
        const result = await cursor.toArray()
        res.send(result);
    })
    app.post('/products',async(req,res)=>{
        const productData = req.body;
        const result = await plantCollection.insertOne(productData)
        res.send(result);
    })

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {

    //await client.close();
  }
}
run().catch(console.dir);


app.get('/',(req,res)=>{
    res.send('The server is working properly')
})

const port = process.env.PORT||4000;
app.listen(port,()=>{
    console.log(`The server is running at port ${port}`)
})