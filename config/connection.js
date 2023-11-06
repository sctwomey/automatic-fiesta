const { connect, connection } = require("mongoose");

// This is for connecting the server to the database, and for future deployment, if needed.
connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialDB');

module.exports = connection;