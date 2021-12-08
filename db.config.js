module.exports = {
    HOST: "us-cdbr-east-04.cleardb.com",
    USER: "bf0ed817685c4c",
    PASSWORD: "d32f92d0",
    DB: "heroku_3525b48ff5e7cb8",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };