import express from "express"
import conn from "./db/connection.js";

const app = express();

app.use(express.json());


const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})

conn();
