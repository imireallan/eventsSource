const Router = require("express").Router;
const getEvents = require("../handlers/getEvents");
const createEvents = require("../handlers/createEvents");
const getEvent = require("../handlers/getEvent");
const getCategories = require("../handlers/getCategories");

module.exports = (app, db) => {
  const router = new Router();

  router.route("/events/:eventId").get(getEvent(db));
  router.route("/events").get(getEvents(db)).post(createEvents(db));
  router.route("/categories").get(getCategories(db));

  app.use("/api/v1", router);
};
