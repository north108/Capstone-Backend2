import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSessionSchema = new Schema({
  userId: {
    type: String,
    default: -1
  },
  timestamp: {
    type: Date,
    default: Date.now()
  },
  isDeleted: {
    type: Boolean,
    defualt: false
  }
});