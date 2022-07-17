import 'dotenv/config'
import "express-async-errors"
import './Database';
import app from './Config/AppServer'

app.listen(8000, () => console.log("Connected to port 8000"))
