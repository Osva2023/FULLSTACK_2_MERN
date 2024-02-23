import { MongoClient } from "mongodb"; 
//const Db = process.env.ATLAS_URI;
const Db = "mongodb+srv://elosvadel84:Rocket_Mern@cluster0.swdaoaq.mongodb.net/employees?retryWrites=true&w=majority"; // ERASE THIS LINE AND WRITE YOUR OWN

const client = new MongoClient(Db);

let _db;

  
  export async function connectToServer () {
    try {
      await client.connect();

        _db = client.db("employees");
        console.log("Successfully connected to MongoDB.");
   } catch (err) {
     console.error(err);
   }
  }
      
  

  export function getDb() {
    return _db;
  }
