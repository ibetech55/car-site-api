import express from "express";
import { routes } from "./routes";

const app = express();
app.use(express.json())
app.use('/v1/api', routes)


app.listen(8000, () => console.log("Connected to port 8000"))