const express=require("express");
const router=express.Router();
const Person = require("../models/Person");
const {handler}=require("../controllers/Person")


router.post("/", handler);

// router.get("/person",async(req,res)=>{
//     try{
//       const data=await Person.find({});
//       res.status(200).json(data);

//     }
//     catch(error){d
//       res.status(400).json({error: error.message});
//     }
//   })


// router.get("/person/:workType",async(req,res)=>{
//     try{
//       const workType=req.params.workType;
//       if(workType=='chef' || workType=='waiter'){
//           const data=await Person.find({work: workType});
//           res.status(200).json(data);
//       }

//     }
//     catch(error){
//       res.status(400).json({error: error.message});
//     }
//   })








router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;              // get id from URL
    const updatedData = req.body;          // get new values from request body

    const updatedPerson = await Person.findByIdAndUpdate(
      id,
      updatedData,
      { new: true, runValidators: true }   // return updated doc + validate schema
    );
    console.log(updatedPerson);

    if (!updatedPerson) {
      return res.status(404).json({ message: "Person not found" });
    }

    res.status(200).json({ message: "Person updated successfully", updatedPerson });
  } catch (error) {
    res.status(400).json({ message: "Error updating person", error: error.message });
  }
});




// new comment added 
  module.exports=router;
