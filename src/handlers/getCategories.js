module.exports = (db) => {
    return async (req, res) => {
      try {
        const events = await db.collection("events");
        const eventsList = await events.find({}).toArray();
        const data = eventsList.map((event) => event.category);
        return res.json(data);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    };
  };