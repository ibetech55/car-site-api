import "reflect-metadata"
import 'dotenv/config'
import { DataSource } from "typeorm"
import { CreateTableUsers1657492025020 } from './migrations/1657492025020-CreateTableUsers'
import { Users } from '../database/models/user.model'
import { AddPasswordToUser31657672719517 } from "./migrations/1657672719517-AddPasswordToUser3"

const AppDataSource = new DataSource({
  type: 'postgres',
  port: +process.env.DBPORT,
  username: process.env.DBUSERNAME,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME,
  synchronize: false,
  logging: false,
  entities: [Users],
  migrations: [CreateTableUsers1657492025020, AddPasswordToUser31657672719517]
})

AppDataSource.initialize()
  .then(() => {
    console.log("Connected to DB")
  })
  .catch((error) => console.log(error))

export { AppDataSource }
