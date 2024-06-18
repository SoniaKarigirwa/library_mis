import { Sequelize } from '../utils/database.js';
import { DataTypes } from 'sequelize';

const sequelize = new Sequelize({
  dialect: "mysql",
  username: "root",
  password: "",
  database: "library_management_sys",
  host: "localhost",
  port: 3306
})

const UserModel = sequelize.define('users', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING(100),
    unique: false,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
    selectable: false,
  },
},
);

UserModel.sync({ alter: true })
  .then(() => {
    console.log("Data table created successfully");
  })
  .catch((error) => {
    console.error("Error creating Data table for user:", error);
  });

export default UserModel