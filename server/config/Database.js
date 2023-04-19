//importing important libraries
import { Sequelize } from "sequelize";

//initialitation to connect the server with the local database using sequelize library
const db = new Sequelize('beasiswa_pintar', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
