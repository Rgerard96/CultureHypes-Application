import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    seller: Boolean,
    userAddress: {
      address: String,
      city: String,
      postalCode: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User
  ? mongoose.models.User
  : mongoose.model('User', userSchema);

export default User;
