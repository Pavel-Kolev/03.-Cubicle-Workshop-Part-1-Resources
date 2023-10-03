const uniqueid = require("uniqid")
const fs =require("fs")
const cubeFile=fs.readFileSync("./src/config/database.json")
const cubes=JSON.parse(cubeFile)
let allCubes=cubes.cube



exports.create = (cubeData) => {
    const newCube = {
        id: uniqueid(),
        ...cubeData

    }
   
    allCubes.push(newCube)
    cubeJSON=JSON.stringify(cubes)
    return fs.writeFileSync("./src/config/database.json",cubeJSON)
    
   
}

exports.getAll = (search, from, to) => {
  
    let filtercubes=[...allCubes]
console.log(search)
console.log(filtercubes[0].name)

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