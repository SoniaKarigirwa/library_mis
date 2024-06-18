import BookModel from "../models/bookModel.js";

export const getAllBooks = async (req, res) => {
    try {
        const books = await BookModel.findAll();
        res.send(books);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getBookById = async (req, res) => {
    try {
        const id = req.params.id;
        const book = await BookModel.findOne({ id })
        console.log(id, book)
        res.send(book);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const addBook = async (req, res) => {
    try {
        const { name, author, publisher, publicationYear, subject } = req.body;
        const book = await BookModel.create({ name, author, publisher, publicationYear, subject});
        res.status(201).send(book);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateBook = async(req, res) => {
    try {
        const { name, author, publisher, publicationYear, subject } = req.body;
        const book = await BookModel.update({ name, author, publisher, publicationYear, subject }, { where: { id: req.params.id }});
        res.status(201).send(book);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteBook = async(req, res) => {
    try {
        const {id} = req.params;
        const bookExists = await BookModel.findOne({where: {id}})

        console.log(bookExists)

        const deletedBook = await BookModel.destroy( { where : { id }});
        res.status(201).send({message: "Successfully deleted book"})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}