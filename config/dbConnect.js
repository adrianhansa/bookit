import mongoose from 'mongoose';

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  mongoose
    .connect(process.env.DB_CONNECTION)
    .then((conn) => console.log('connected to mongodb'));
};

export default dbConnect;
