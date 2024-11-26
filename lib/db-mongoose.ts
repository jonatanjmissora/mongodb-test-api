import mongoose, { Connection } from "mongoose";

let cachedConnection: Connection | null = null;

const URI = process.env.MONGODB_URI
const databaseName = "MyDatabase"

if (!URI) throw new Error("Coloque una cadena válida en .env para establecer la conexión")

export async function connectToMongoDB() {
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