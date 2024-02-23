import { MongoClient } from "mongodb"; 
//const Db = process.env.ATLAS_URI;
const Db = "mongodb+srv://elosvadel84:Rocket_Mern@cluster0.swdaoaq.mongodb.net/Rocket_Mern?retryWrites=true&w=majority"; // ERASE THIS LINE AND WRITE YOUR OWN

const client = new MongoClient(Db);

let _db;

  
  export const  connectToServer = async() =>  {
    console.log('Connecting to MongoDB...');
    try {
      await client.connect();

        _db = client.db("employees");
        //console.log("Successfully connected to MongoDB.");
   } catch (err) {
     console.error("There was an error connecting to MongoDB: ", err);
   }
  }
      
  

  export const getDb = () =>{
    if (!_db) throw new Error('Unable to stablish connection to database');
    
    return _db;
  }
