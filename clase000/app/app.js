import express from "express";
import routers from "./src/routes/index.router.js";

const app = express()

app.use(express.json())
app.use(express.urlencoded( {extended: true}) )

app.get("/", async (req, res) => {
  res.send("Welcome from Express")
 })

app.use("/api/", routers)
app.get('/api/', async (req, res) => {
  res.send("Welcome from Backend")
})

app.listen(8080, () => {
    console.log('Listening to 8080 Port');
})