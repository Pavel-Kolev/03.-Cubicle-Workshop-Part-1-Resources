const acc=require("../models/Accesory")






exports.create=(accessoryData)=>acc.create(accessoryData)
exports.getAll =()=>acc.find()