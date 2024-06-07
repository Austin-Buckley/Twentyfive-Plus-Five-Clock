/* eslint-disable react/prop-types */

import {
  Box,
  Button,
  Grid,
  Stack,
  ThemeProvider,
  Typography,
  styled,
} from "@mui/material";

import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { formattedTime } from "./Data";
import { theme } from "./Theme.jsx";

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  fontSize: "1.5rem",
  backgroundColor: "transparent",
  justifyContent: "space-evenly",
  alignItems: "center",
  display: "flex",
}));

export default function Session({ sessionState, startStop, reset }) {
  return (
    <>
      <Typography variant="h5" sx={{ textShadow: "2px 4px 6px black" }}>
        <strong id="timer-label">Current {sessionState.type} Time</strong>
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{}}
        gap={0}
      >
        <Item sx={{}} elevation={5}>
          <Typography
            variant="h1"
            id="time-left"
            sx={{
              color: sessionState.active ? "red" : "white",
              textShadow: "2px 4px 6px black",
            }}
          >
            <strong>{formattedTime(sessionState.time)}</strong>
          </Typography>
        </Item>
        <Item sx={{ width: "100%" }}>
          <Stack direction="row" spacing={2}>
            <ThemeProvider theme={theme}>
              <Button
                color="button"
                variant="outlined"
                sx={{
                  width: "8rem",
                  height: "3rem",
                  boxShadow: "0px 2px 6px black",
                }}
                onClick={startStop}
                id="start_stop"
              >
                {sessionState.active ? <PauseIcon /> : <PlayArrowIcon />}
              </Button>
              <Button
                color="button"
                variant="outlined"
                sx={{
                  width: "8rem",
                  height: "3rem",
                  boxShadow: "0px 2px 6px black",
                }}
                onClick={reset}
                id="reset"
              >
                <RestartAltIcon />
              </Button>
            </ThemeProvider>
          </Stack>
        </Item>
      </Grid>
    </>
  );
}
