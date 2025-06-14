const mongoose = require('mongoose');

const connectDB = async () => {
    console.log(typeof(process.env.MONGODB_URI));
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    if(connection.STATES.connected) {
        console.log('MongoDB connected  successfully');
    } else {
        console.error('Failed to connect to MongoDB');
    }
}

module.exports ={ connectDB };
// This function connects to a MongoDB database using Mongoose.
