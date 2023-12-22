const Squad = require('../../models/squad');

module.exports = {
  create,
  getAll,
  // Add more functions as needed
};

async function create(req, res) {
  try {
    const squad = await Squad.create({ ...req.body, owner: req.user._id });
    res.status(201).json(squad);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function getAll(req, res) {
  try {
    const squads = await Squad.find({ owner: req.user._id });
    res.json(squads);
  } catch (error) {
    res.status(500).json(error);
  }
}