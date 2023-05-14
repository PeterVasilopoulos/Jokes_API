// Import joke schema
const joke = require("../models/joke.model");

// Add joke
module.exports.addJoke = (req, res) => {
    const newJoke = req.body;
    joke.create(newJoke)
    .then(newJoke => res.json({results: newJoke}))
    .catch(err => console.log("Error!", err))
} 

// Get all jokes
module.exports.getJokes = (req, res) => {
    joke.find()
    .then(allJokes => res.json({results: allJokes}))
    .catch(err => res.json(err))
}

// Get one joke
module.exports.getOneJoke = (req, res) => {
    const paramId = req.params.id;
    joke.findOne({_id: paramId})
    .then(oneJoke => res.json({result: oneJoke}))
    .catch(err => res.json(err))
}

// Update one joke
module.exports.updateJoke = (req, res) => {
    const paramId = req.params.id;
    const updatedInfo = req.body;
    joke.findOneAndUpdate({_id: paramId}, updatedInfo, {new: true})
    .then(updatedJoke => res.json({results: updatedJoke}))
    .catch(err => res.json(err))
}

// Delete one joke
module.exports.deleteJoke = (req, res) => {
    const paramId = req.params.id;
    joke.findOneAndDelete({_id: paramId})
    .then(deletedJoke => res.json({results: deletedJoke}))
    .catch(err => res.json(err))
}