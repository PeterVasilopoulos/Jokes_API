// Establish connection to the db server
const mongoose = require("mongoose");

const dbName = "jokedb";

const uri = `mongodb://127.0.0.1/${dbName}`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Connection established! Database: ${dbName}`))
.catch((err) => console.log(`Mission failed! We'll get em next time. ${err}`))