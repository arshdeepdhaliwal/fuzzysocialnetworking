const mongoose = require("mongoose"); // Importing the Mongoose library to interact with MongoDB

// Connecting to the MongoDB database
// The connection string is taken from an environment variable MONGODB_URI if it exists,
// otherwise, it defaults to the local MongoDB instance at the specified URI
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:3000/fuzzy-social",
  {
    useNewUrlParser: true, // Use the new URL parser instead of the deprecated one
    useUnifiedTopology: true, // Use the new unified topology engine for MongoDB connections
  }
);

// Enable debugging to log MongoDB queries being executed
mongoose.set("debug", true);

module.exports = mongoose.connection; // Export the Mongoose connection for use in other parts of the application
