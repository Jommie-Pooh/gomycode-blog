const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
 
  isVerified: { type: Boolean, default: false },
 verificationToken: { type: String}, 
passwordResetToken: { type: String },
  password: { type: String, required: true },
}, {timestamps: true});
const User = mongoose.model("user", userSchema)
module.exports = User;
