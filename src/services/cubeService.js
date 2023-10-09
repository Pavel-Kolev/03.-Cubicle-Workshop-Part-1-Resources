const Cube = require("./../models/Cube.js");

exports.create = async (cubeData) => {
  const cube = await Cube.create(cubeData);

  return cube;
};

exports.getAll = async (search, from, to) => {
  let filtercubes = await Cube.find().lean();

  if (search) {
    filtercubes = filtercubes.filter((cube) =>
      cube.name.includes(search.toLowerCase())
    );
  }
  if (from) {
    filtercubes = filtercubes.filter(
      (cube) => cube.difficultyLevel >= Number(from)
    );
  }
  if (to) {
    filtercubes = filtercubes.filter(
      (cube) => cube.difficultyLevel <= Number(to)
    );
  }
  return filtercubes;
};
exports.getSingleCube = (id) => {
  return Cube.findById(id).populate("accessories")
};
exports.attachAccessory = async (cubeId,accessoryId) => {
const cube =await this.getSingleCube(cubeId)
cube.accessories.push(accessoryId)
return cube.save()

};
exports.update=async(id,cubeData)=>Cube.findByIdAndUpdate(id,cubeData)