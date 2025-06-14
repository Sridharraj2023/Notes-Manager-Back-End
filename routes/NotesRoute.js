import express from "express"
import noteModel from "../models/NotesModel.js";
import { model } from "mongoose";


 const router = express.Router();

//Get notes

router.get('/', async (req, res)=>{
    try {

        const notes = await noteModel.find();
        res.json(notes);
        
    } catch (error) {

        console.log(error.message)
        
    }
    
});

//Add notes

router.post('/', async (req, res)=> {

    try {
         const {title, description} = req.body;
        const newNote = new noteModel({title, description});
        const saveNote = await newNote.save();
        res.status(201).json(saveNote);
        
    } catch (error) {

        console.log(error.message)
        
    }
   
});

export default router