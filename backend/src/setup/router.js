const Router = require("express").Router;
const hello = require("../handlers/hello");

module.exports = (app) => {
  const router = new Router();

  router.get("/", hello());

  app.use(router);
};
