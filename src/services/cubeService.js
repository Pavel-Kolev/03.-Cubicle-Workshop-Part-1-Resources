const uniqueid = require("uniqid")
const fs =require("fs")
const cubeFile=fs.readFileSync("./src/config/database.json")
const cubes=JSON.parse(cubeFile)
let allCubes=cubes.cube
const Cube=require("./../models/Cube.js")


exports.create = async (cubeData) => {
   const cube=await Cube.create(cubeData)
   
    
    return cube;
   
}

exports.getAll = (search, from, to) => {
  
    let filtercubes=[...allCubes]
console.log(search)
console.log(filtercubes.name)

    if(search){
        filtercubes=filtercubes.filter((cube)=>cube.name.includes(search.toLowerCase()))
    }
    if(from){
        filtercubes=filtercubes.filter((cube)=>cube.difficultyLevel>=Number(from))
    }
    if(to){
        filtercubes=filtercubes.filter((cube)=>cube.difficultyLevel<=Number(to))
    }
    return filtercubes
  
}
exports.getSingleCube=(id)=>{
return allCubes.find((cube)=>cube.id===id)
}