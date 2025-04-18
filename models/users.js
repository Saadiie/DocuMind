import mongoose, { Schema, models } from 'mongoose';
import { string } from 'zod';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model('User', userSchema);

export default User;
