import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { router as authRoutes } from "./routes/auth.routes.js"

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type"],
    })
)


app.listen(PORT, () => console.log(`The server is running on port ${PORT}`))

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.use("/api/auth", authRoutes)
