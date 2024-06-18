import { getAllBooks, getBookById, addBook, updateBook, deleteBook }  from '../controllers/bookController.js';
import express from 'express';
import authenticate from '../middlewares/authMiddleware.js'


const bookRoutes = express.Router();

bookRoutes.get('/books', authenticate, getAllBooks)
bookRoutes.get('/book/:id', authenticate, getBookById)
bookRoutes.post('/books/addBook', authenticate, addBook)
bookRoutes.put('api/books/updateBook/:id', authenticate, updateBook)
bookRoutes.delete('api/books/deleteBook/:id', authenticate, deleteBook)

export default bookRoutes