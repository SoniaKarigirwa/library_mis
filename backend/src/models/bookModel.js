import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/database.js';

const BookModel = sequelize.define('books', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  publisher: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  publicationYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  subject: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
},{
    tableName: "books"
  },
);

BookModel.sync({ alter: true })
  .then(() => {
    console.log("Book table created successfully");
  })
  .catch((error) => {
    console.error("Error creating Data table for book:", error);
  });


export default BookModel