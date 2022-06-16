const { v4 } = require("uuid");

module.exports = (db) => {
  return async (req, res) => {
    try {
      const { title, description, address, category, isVirtual } = req.body;
      const data = {
        _id: v4(),
        title,
        description,
        address,
        category,
        isVirtual,
        date: new Date().toISOString(),
      };
      await db.collection("events").insertOne(data);
      return res.json({
        message: "Event created successfully",
        eventId: data._id,
        data,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
};
