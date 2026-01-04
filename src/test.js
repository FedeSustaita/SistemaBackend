import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // esto carga el .env

console.log(process.env.MONGO_URI); // <-- probá esto para ver si carga

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected!');
    mongoose.connection.close();
  })
  .catch(err => console.error('MongoDB connection error:', err));
