// Import joke controller
const JokeController = require("../controllers/joke.controller");

module.exports = (app) => {
    // Add joke
    app.post("/api/jokes", JokeController.addJoke);

    // Get all jokes
    app.get("/api/jokes", JokeController.getJokes);
    
    // Get one joke
    app.get("/api/jokes/:id", JokeController.getOneJoke);

    // Update one joke
    app.put("/api/jokes/:id", JokeController.updateJoke);

    // Delete one joke
    app.delete("/api/jokes/:id", JokeController.deleteJoke);
}