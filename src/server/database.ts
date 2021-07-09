import 'dotenv/config';

import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

const mongooseOptions: mongoose.ConnectionOptions = {
  connectTimeoutMS: 30000,
  keepAlive: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

export const prepareDB = async () => {
  const server: MongoMemoryServer = await MongoMemoryServer.create();

  const start = () => {
    const mongoUri = server?.getUri();
    mongoose.connect(mongoUri, mongooseOptions, (err) => {
      if (err) console.error(err);
    });
  };

  const stop = async () => {
    await mongoose.disconnect();
    return server.stop();
  };

  return {
    start,
    stop,
  };
};

export default {
  connect(): void {
    mongoose
      .connect(`${process.env.MONGO_URI}`, mongooseOptions)
      .then(() => console.log('MongoDB connected'))
      .catch((err: unknown) => console.error(err));
  },
};
