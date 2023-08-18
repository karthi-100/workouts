
var express=require('express')
var app=express()
var {MongoClient,ServerApiVersion}=require('mongodb')
const uri='mongodb+srv://karthivicky:VF5aF0KsGI5pUPAl@workoutapi.giighg8.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  
app.get('/workouts',async(req,res)=>{
  const db=client.db('Workouts')
  const data= await db.collection('Exercise').find().toArray()
  res.send(data)
})

app.get('/BodyParts',async(req,res)=>{
  const db=client.db('BodyParts')
const data=await db.collection('Parts').find().toArray()
res.send(data)
console.log(data);
})

app.listen(3000)

