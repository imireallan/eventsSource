import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Event(props) {
  const { title, description, date, address, category } = props;
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Date: {new Date(date).toLocaleDateString()}
        </Typography>
      </CardActions>
      <CardActions>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Venue: {address}
        </Typography>
      </CardActions>
      <CardActions>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Category: {category}
        </Typography>
      </CardActions>
    </React.Fragment>
  );
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
