const express = require("express");

const Movie = require("../models/movie.model");

const router = express.Router();


router.post("",async (req,res)=>{
    try{
        const movie = await Movie.create(req.body);
    
        return res.status(201).send(movie);
    }catch(e){
        return res.status(500).json({message:e.message,status:"failed"});
    }
    });

 router.get("",async (req,res)=>{
        try{
            const movie = await Movie.find().lean().exec();
        
            return res.status(201).send(movie);
        }catch(e){
            return res.status(500).json({message:e.message,status:"failed"});
        }
        });
    

module.exports=router;