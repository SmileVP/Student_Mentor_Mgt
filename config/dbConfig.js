const mongodb =require("mongodb");
const MongoClient = mongodb.MongoClient;
const dbName="Student_Mentor";
const dbUrl = `mongodb+srv://Vishnupriya:Vishnu12345@cluster0.x4j7bh9.mongodb.net/${dbName}`

module.exports={dbUrl,dbName,mongodb,MongoClient};