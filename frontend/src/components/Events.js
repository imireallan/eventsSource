import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useSelector } from "react-redux";
import Event from "./Event";
import { selectStatus } from "../features/events/eventsSlice";

export const Events = ({ events }) => {
  const status = useSelector(selectStatus);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (events.length === 0 && status === "fulfiled") {
    return <div>No events found</div>;
  }
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List sx={{ display: "flex", gap: "10px", margin: "2em" }}>
        {events.map((event) => {
          return (
            <ListItem disablePadding key={event._id}>
              <Event {...event} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
