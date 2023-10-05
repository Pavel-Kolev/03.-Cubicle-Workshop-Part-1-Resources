const acc = require("../models/Accesory");

exports.create = (accessoryData) => acc.create(accessoryData);
exports.getAll = () => acc.find();
exports.getWithoutOwned = (accesoryIds) => {
  return acc.find({ _id: { $nin: accesoryIds } });
};
