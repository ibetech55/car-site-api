import 'dotenv/config'
import "express-async-errors"
import './database';
import app from './config/AppServer'

app.listen(8000, () => console.log("Connected to port 8000"))
