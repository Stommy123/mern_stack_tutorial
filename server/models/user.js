const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  favoriteBook: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.statics.authenticate = (email, password, callback) => {
  User.findOne({ email }).exec((error, user) => {
    if (error || !user) return callback({ error: true });
    bcrypt.compare(password, user.password, (_, res) => callback({ error: !res, user }));
  });
};
UserSchema.pre("save", function(next) {
  const user = this;
  bcrypt.hash(user.password, 6, (err, hash) => {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
