//importing important functions and libraries
import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

//making database model by using sequelize
const Application = db.define(
  "applications",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phonenum: DataTypes.STRING,
    semester: DataTypes.INTEGER,
    gpa: DataTypes.DOUBLE,
    scheme: DataTypes.STRING,
    file: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Application;

(async () => {
  await db.sync();
})();
