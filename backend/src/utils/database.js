import { db_host, db_name, db_user, db_password } from './config.js';
import { Sequelize } from 'sequelize';


const sequelize = new Sequelize({
  dialect: "mysql",
  host: db_host,
  port: 3306,
  database: db_name,
  username: db_user,
  password: db_password
});

async function connectDB() {
  try {
    console.log(db_host,db_name)
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

export { connectDB, sequelize, Sequelize };

export default sequelize;