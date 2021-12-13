const express = require("express");

const Show = require("../models/show.model");

const router = express.Router();

router.post("",async (req,res)=>{
    try{
        const show = await Show.create(req.body);
    
        return res.status(201).send(show);
    }catch(e){
        return res.status(500).json({message:e.message,status:"failed"});
    }
    });

    router.get("/:movie",async (req,res)=>{
        try{
            const show = await Show.find(req).lean().exec();
        
            return res.status(201).send(show);
        }catch(e){
            return res.status(500).json({message:e.message,status:"failed"});
        }
        });
    
        router.get("/:id",async (req,res)=>{
            try{
                const show = await Show.findById(req.params.id).lean().exec();
            
                return res.status(201).send(show);
            }catch(e){
                return res.status(500).json({message:e.message,status:"failed"});
            }
            });
    

module.exports=router;