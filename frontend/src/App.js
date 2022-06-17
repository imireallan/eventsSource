import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Events } from "./components/Events";
import Header from "./components/Header";
import Categories from "./components/Categories";
import { fetchEventsAsync } from "./features/events/eventsSlice";
import { selectEvents } from "./features/events/eventsSlice";

function App() {
  const eventsData = useSelector(selectEvents);
  const [category, setCategory] = React.useState("");
  const [events, setEvents] = React.useState(eventsData || []);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchEventsAsync());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(fetchEventsAsync({ category }));
  }, [category, dispatch]);

  React.useEffect(() => {
    setEvents(eventsData);
  }, [eventsData]);
  return (
    <div className="App">
      <Header category={category} />
      <Categories setCategory={setCategory} category={category} />
      <Events events={events} />
    </div>
  );
}

export default App;
