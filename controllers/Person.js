
const Person= require("../models/Person")


handler = async (req,res)=>{
    try { 
        const person = new Person(req.body);  // create new person from request body
        await person.save();                  // save to MongoDB
        res.status(201).json({ message: "Person added successfully",person});
      } catch (error) {
        res.status(400).json({ message: "Error adding person", error: error.message });
      }
    }
module.exports={
    handler,
};
    
