import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchEvents, fetchCategories } from "./eventsAPI";

const initialState = {
  events: [],
  status: "idle",
  categories: [],
};

export const fetchEventsAsync = createAsyncThunk(
  "events/fetchEvents",
  async (payload) => {
    return await fetchEvents(payload);
  }
);
export const fetchCategoriesAsync = createAsyncThunk(
  "events/fetchCategories",
  async () => {
    return await fetchCategories();
  }
);

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEventsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEventsAsync.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.events = action.payload;
      });
    builder
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.categories = action.payload;
      });
  },
});

export const selectEvents = (state) => state.events.events;
export const selectStatus = (state) => state.events.status;
export const selectCategories = (state) => state.events.categories;

export const { fetchAllEvents } = eventsSlice.actions;

export default eventsSlice.reducer;
