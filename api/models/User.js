const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: '',
    },
    shortBio: {
      type: String,
      require: true,
    },
    kidName: {
      type: String,
      require: true,
    },
    typeUser: {
      type: String,
      require: true,
    },
    kidAge: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);



module.exports = mongoose.model('User', UserSchema);
