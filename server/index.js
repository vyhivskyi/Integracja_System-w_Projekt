require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const userRoutes = require("./routes/users")
const authRoutes = require("./routes/auth")
const infoRoutes = require("./routes/info")
const deleteRoutes = require("./routes/delete")
const daneRoutes = require("./routes/dane")
const tokenVerification = require('./middleware/tokenVerification')

//middleware
app.use(express.json())
app.use(cors())
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Nasłuchiwanie na porcie ${port}`))
const connection = require('./db')
connection()

const jsonData = require("./readjson")
const xmlData = require("./readxml")

app.get("/api/dane", tokenVerification)
app.get("/api/users",tokenVerification)
app.get("/api/info", tokenVerification)
app.get("/api/delete", tokenVerification);
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/info", infoRoutes)
app.use("/api/delete", deleteRoutes);
app.use("/api/dane", daneRoutes)
