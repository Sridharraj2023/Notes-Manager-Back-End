import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import NoteRoutes from "./routes/NotesRoute.js"
import connectDB from "./config/db.js";


dotenv.config();
const app = express();


//Middlewares

app.use(cors());
app.use(express.json());
app.use('/api/notes', NoteRoutes);

// MongoDB connection

connectDB();



app.get("/", (req, res)=> {

    res.send("Server Connected");
});

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> {console.log(`Server started on port http://localhost:${PORT}`)});