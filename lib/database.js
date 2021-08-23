const MongoClient = require('mongodb').MongoClient;

let cachedDb = null;

export const connectToDatabase = async () => {
    if (cachedDb) {
        console.log("Use existing connection");
        return Promise.resolve(cachedDb);
    } else {
        return MongoClient.connect(process.env.MongoDbUri, {
            native_parser: true,
            useUnifiedTopology: true
        })
        .then((client) => {
            let db = client.db("PostQueryParams");
            console.log("new DB connection");
            cachedDb = db;
            return cachedDb;
        })
        .catch((error) => {
            console.log("MongoDB connection error" ,error);
        })
    }
}
