module.exports = (db) => {
  return async (req, res) => {
    try {
      const { eventId } = req.params;
      const event = await db.collection("events").findOne({ _id: eventId });
      if (!event) {
        return res.status(404).json({ error: "Event not found" });
      }
      return res.json(event);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
};
