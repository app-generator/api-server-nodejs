/*

Copyright (c) 2019 - present AppSeed.us

*/
import mongoose from 'mongoose';

interface ActiveSessionSchemaInterface {
  token: string;
  userId: string;
  date: Date;
}
const activeSessionSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

interface ActiveSessionDbInterface extends ActiveSessionSchemaInterface, mongoose.Document {}
const activeSession = mongoose.model<ActiveSessionDbInterface>('ActiveSession', activeSessionSchema);
export default activeSession;
