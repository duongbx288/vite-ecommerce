import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';

// G8YIImQC5pRNVybE
const connect = async (username: string, password: string) => {
    try {
        await mongoose.connect(`mongodb+srv://${username}:${password}@ecluster.8ljlacr.mongodb.net/test`);
        console.log('Successful connect');
    }
    catch (error) {
        console.log(error);
    }
};

export default connect;