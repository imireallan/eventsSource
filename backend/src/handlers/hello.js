module.exports = () => {
  return async (request, response) => {
    return response.json({ message: "Hello world" });
  };
};
