import "reflect-metadata"
import 'dotenv/config'
import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: 'postgres',
    port: +process.env.DBPORT,
    username: process.env.DBUSERNAME,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME,
    host: process.env.DBHOST,
    synchronize: true,
    logging: false,
    entities: [`${__dirname}/**/entities/*.{ts,js}`],
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`]
})

AppDataSource.initialize()
    .then(() => {
        console.log("Connected to DB")
    })
    .catch((error) => console.log(error))

export { AppDataSource }
