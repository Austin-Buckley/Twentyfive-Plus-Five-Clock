/* eslint-disable react/prop-types */

import {
  Button,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { interval, max, min, minute } from "./Data";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { theme } from "./Theme.jsx";

export default function Controller({ time, type, setTime }) {
  const typeId = type.toLowerCase();

  return (
    <>
      <Typography
        variant="h5"
        id={typeId + "-label"}
        sx={{ pb: "0.5rem", textShadow: "2px 4px 6px black" }}
      >
        <strong>{type + " Length"}</strong>
      </Typography>
      <Stack direction="row" spacing={0.5}>
        <ThemeProvider theme={theme}>
          <Button
            color="button"
            variant="outlined"
            sx={{
              boxShadow: "0px 1px 6px black",
              width: "1rem",
              height: "2rem",
            }}
            onClick={() => (time > min ? setTime(time - interval) : null)}
            id={typeId + "-decrement"}
          >
            <ArrowDropDownIcon />
          </Button>
          <Typography
            variant="inherit"
            color="button"
            id={typeId + "-length"}
            sx={{
              cursor: "default",
              width: "1rem",
              height: "1rem",
              fontSize: "1.5rem",
              textShadow: "0px 2px 4px black",
            }}
          >
            <strong>{time / minute}</strong>
          </Typography>
          <Button
            color="button"
            variant="outlined"
            sx={{
              width: "1rem",
              height: "2rem",
              boxShadow: "0px 1px 6px black",
            }}
            onClick={() => (time < max ? setTime(time + interval) : null)}
            id={typeId + "-increment"}
          >
            <ArrowDropUpIcon />
          </Button>
        </ThemeProvider>
      </Stack>
    </>
  );
}
