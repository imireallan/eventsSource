// in production the database uri will be set in an environment variable.

module.exports = {
  port: process.env.PORT || 4000,
  databaseUri: process.env.DATABASE_URI || `mongodb+srv://imireallan:m0zillafirefox@cluster0.luioo.mongodb.net/events?retryWrites=true&w=majority`,
};
