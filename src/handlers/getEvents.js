// module.exports = (db) => {
//   return async (req, res) => {
//     try {
//       const { category, search } = req.query;
//       const events = await db.collection("events");
//       if (category) {
//         let eventsList = await events.find({ category }).toArray();
//         return res.json(eventsList);
//       } else if (search && /[a-zA-Z0-9]/.test(search)) {
//         let eventsList = await searchEntries(db, search);
//         return res.json(eventsList);
//       }
//       const eventsList = await events.find({}).toArray();
//       return res.json(eventsList);
//     } catch (error) {
//       return res.status(500).json({ error: error.message });
//     }
//   };
// };

// const searchEntries = async (db, search) => {
//   const events = await db.collection("events");
//   let patter;
//   const eventsList = await events
//     .find({
//       $or: [
//         { title: { $regex: search, $options: "si" } },
//         { description: { $regex: search, $options: "si" } },
//         { category: { $regex: search, $options: "si" } },
//         { address: { $regex: search, $options: "si" } },
//       ],
//     })
//     .toArray();
//   return eventsList;
// };
module.exports = (db) => {
  return async (req, res) => {
    try {
      const { category, search } = req.query;
      let events = await db.collection("events");
      let find_query = {};
      if (category) {
        find_query = { category };
      }
      if (search && /[a-zA-Z0-9]/.test(search)) {
        find_query = { ...find_query, ...getSearchEntries(search) };
      }
      let eventsList = await events.find(find_query).toArray();
      return res.json(eventsList);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
};

const getSearchEntries = (search) => {
  return {
    $or: [
      { title: { $regex: search, $options: "si" } },
      { description: { $regex: search, $options: "si" } },
      { category: { $regex: search, $options: "si" } },
      { address: { $regex: search, $options: "si" } },
    ],
  };
};
