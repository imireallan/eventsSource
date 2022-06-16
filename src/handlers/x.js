module.exports = (db) => {
  return async (req, res) => {
    try {
      const { category, search } = req.query;
      let events = await db.collection("events");
      if (category) {
        events = await events.find({ category });
      }
      if (search && /[a-zA-Z0-9]/.test(search)) {
        events = await searchEntries(events, search);
      }
      const eventsList = await events.find({}).toArray();
      return res.json(eventsList);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
};

const searchEntries = async (events, search) => {
  const eventsList = await events.find({
    $or: [
      { title: { $regex: search, $options: "si" } },
      { description: { $regex: search, $options: "si" } },
      { category: { $regex: search, $options: "si" } },
      { address: { $regex: search, $options: "si" } },
    ],
  });
  return eventsList;
};
