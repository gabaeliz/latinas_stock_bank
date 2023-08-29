const { DB } = require("./config");

const { Sequelize } = require("sequelize");


const db = new Sequelize(DB.NAME, DB.USER, DB.PASSWORD, {
  host: DB.HOST,
  DIALECT: "postgres",
  DIALECTOptions:
    DB.ENV === "development"
      ? {}
      : {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
});

module.exports = { db };
