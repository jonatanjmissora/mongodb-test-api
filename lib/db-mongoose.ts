import mongoose, { Connection } from "mongoose";

let cachedConnection: Connection | null = null;

const URI = process.env.MONGODB_URI
const databaseName = "MyDatabase"

if (!URI) throw new Error("Coloque una cadena válida en .env para establecer la conexión")

export async function connectToMongoDBMongoose() {
  if (cachedConnection) {
    console.log("Using cached db connection");
    return cachedConnection;
  }
  try {
    const cnx = await mongoose.connect(
      URI!,
      {
        dbName: databaseName,
      }
    );
    cachedConnection = cnx.connection;
    console.log("New mongodb connection established");
    return cachedConnection;
  } catch (error) {

    console.log(error);
    throw error;
  }
}

/*

const connection = {}
export async function connectToMongoDBmongoose() {
  try {
    if(connection.isConnected) {
      console.log("Using existing connection")
      return
    }
    const db = await mongoose.connect(
      URI!,
      {
        dbName: databaseName,
      }
    )
      // readyState value is 1 if the connection exists, otherwise 0

    connection.isConnected = db.connections[0].readyState
  }
  catch (error) {
    console.log("Connection failed.", error.message)
  } 
}


*/