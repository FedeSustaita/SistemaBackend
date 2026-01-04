import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  accessType: { type: Number, default: 1 } // 1=usuario normal, 2=admin
});

export default mongoose.model('User', userSchema);
