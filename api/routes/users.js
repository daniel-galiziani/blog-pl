const router = require("express").Router()
const User = require("../models/User")


//UPDATE
router.put("/:id", async (req,res) =>{
    
    try {

        
    } catch (error) {
        res.status(500).json(error)
    }
})

//DELETE



module.exports = router