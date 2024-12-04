import express from "express"
import db from "./config/database.js"
import router from "./router/index.js"
const app = express()
try {
    await db.authenticate()
    console.log('Database connected')
} catch (error) {
    console.log(error)
}
app.use(express.json())
app.use(router)

app.listen(4000, () => console.log(`server running at port 4000`))