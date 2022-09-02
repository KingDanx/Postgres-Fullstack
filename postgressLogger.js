const { Pool, Client } = require('pg')
const dotenv = require('dotenv')
const createTestTable = require('./createTestTables');
const {generateElement, isDefined} = require('./generateElement')
const express = require('express')
const cors = require('cors')
const app = express()
const server = require("http").createServer(app);

let exportData

app.use(cors());

// app.get('/', (req, res)=> console.log(res.data))


dotenv.config()



const connectDb = async () => {
    try {
        const client = new Client({
            user: process.env.PGUSER,
            host: process.env.PGHOST,
            database: process.env.PGDATABASE,
            password: process.env.PGPASSWORD,
            port: process.env.PGPORT
        }
        )
        await client.connect().then(
            console.log("Conected")
        )
        //createTestTable.createTestTable(client); Node export that creates dummy data when called.
        const res = await client.query('SELECT * FROM person')
        console.log(res.rows)
        exportData = res.rows
    } catch (error) {
        console.log(error)
    }
}

connectDb()

app.get("/postgres",  (req, res) => res.send(exportData));
  
app.get("/", (req, res) => res.send("Hello World!"));

  server.listen(5050, () => 
    console.log('CORS-enabled web server listening on port 5000')
  )

