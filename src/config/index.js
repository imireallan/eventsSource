const dotEnv = require("dotenv");
const path = require("path");

dotEnv.config({ path: path.resolve(__dirname, "../../.env") });

module.exports = {
  port: process.env.PORT || 4000,
  databaseUri: process.env.DATABASE_URI || "mongodb://localhost:27017/events",
};
