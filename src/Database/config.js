require('dotenv').config()
module.exports = {
    development: {
        username: process.env.DBUSERNAME,
        password: process.env.DBPASSWORD,
        database: process.env.DBNAME,
        host: process.env.DBHOST,
        dialect: process.env.DBDIALECT,
    }
}