import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const userSchema = new Schema({
  firstName: {
    type: String,
    required: 'Enter a first name'
  },
  lastName: {
    type: String,
    required: 'Enter a last name'
  },
  email: {
    type: String            
  },
  password: {
    type: String
  },
  location: {
    type: String,
    required: 'Enter a location'
  },
  created_date: {
    type: Date,
    default: Date.now
  }
})