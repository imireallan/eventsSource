import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchEventsAsync,
  selectCategories,
  fetchCategoriesAsync,
} from "../features/events/eventsSlice";

export default function Categories({ category, setCategory }) {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 2, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={category}
          label="Filter"
          onChange={handleChange}
        >
          <MenuItem value="All">
            <em>All</em>
          </MenuItem>
          {categories.map((category) => {
            return (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            );
          })}
        </Select>
        <FormHelperText>Search by categories</FormHelperText>
      </FormControl>
    </div>
  );
}
