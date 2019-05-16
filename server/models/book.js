const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  author: {
    type: String,
    unique: true,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

BookSchema.methods.addUser = function(userId) {
  this.user = userId;
  return this.save();
};

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;
