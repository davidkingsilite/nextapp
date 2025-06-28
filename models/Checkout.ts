import mongoose from 'mongoose';

 const connectMongo = async () => {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(process.env.MONGODB_URI!);
};

const UserSchema = new mongoose.Schema({
  email: String,
  plan: String,
  createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;

