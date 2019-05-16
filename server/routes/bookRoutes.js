const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.post('/create', (req, res) => {
  const { body: bookData = {}, session: { userId } = {} } = req;
  const newBook = new Book(bookData);
  newBook.save((err, book) => {
    if (err) return res.send({ status: 400, message: 'Error creating book', error: true });
    book.addUser(userId);
    res.send({ book, status: 200 });
  });
});

router.get('/', (req, res) => {
  const { session: { userId: user } = {} } = req;
  const books = Book.find({ user });
  books.exec((err, books) => {
    if (err) return res.send({ status: 400, message: 'Error getting books', error: true });
    const parsedBooks = books.map(b => b._doc);
    res.send({ books: parsedBooks, status: 200 });
  });
});

router.get('/:id', (req, res) => {
  const { params: { id } = {} } = req;
  Book.findById(id, (err, book) =>
    err ? res.send({ status: 400, message: 'Error getting book', error: true }) : res.send({ book, status: 200 })
  );
});

router.post('/update/:id', (req, res) => {
  const { body: bookData, params: { id } = {} } = req;
  Book.findByIdAndUpdate(id, bookData, { new: true }, (err, book) =>
    err ? res.send({ status: 400, message: 'Error updating book', error: true }) : res.send({ book, status: 200 })
  );
});

router.get('/delete/:id', (req, res) => {
  const { params: { id } = {} } = req;
  Book.findById(id, (err, book) => {
    if (err) return res.send({ status: 400, message: 'Error deleting book', error: true });
    book.remove();
    res.send({ status: 200, path: '/' }); //CHANGE PATH LATER
  });
});
