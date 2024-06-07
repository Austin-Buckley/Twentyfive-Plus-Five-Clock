/* eslint-disable react/prop-types */
import "./App.css";

import { Grid, Typography } from "@mui/material/";
import {
  defaultBreakTime,
  defaultSessionTime,
  second,
} from "./components/Data";
import { useEffect, useState } from "react";

import Alarm from "./assets/Alarm.mp3";
import Controller from "./components/SessionController.jsx";
import Item from "./components/Item";
import Session from "./components/CurrentSession.jsx";

function Clock({
  breakTime,
  sessionTime,
  sessionState,
  setBreakTime,
  setSessionTime,
  setSessionState,
  startStop,
  reset,
}) {
  return (
    <Grid
      className="Grid"
      container
      direction={{
        xs: "column-reverse",
        sm: "column-reverse",
        md: "column-reverse",
        lg: "row-reverse",
        xl: "row-reverse",
      }}
      justifyContent={{
        xs: "stretch",
        sm: "stretch",
        md: "stretch",
        lg: "center",
        xl: "center",
      }}
      alignItems={{
        xs: "stretch",
        sm: "stretch",
        md: "stretch",
        lg: "center",
        xl: "center",
      }}
      gap={2}
      m={1}
    >
      <Item sx={{}} elevation={12} className="Item">
        <Controller time={breakTime} type="Break" setTime={setBreakTime} />
      </Item>
      <Item sx={{}} elevation={20} className="Item">
        <Session
          sessionState={sessionState}
          setSessionState={setSessionState}
          startStop={startStop}
          reset={reset}
        />
      </Item>
      <Item sx={{}} elevation={12} className="Item">
        <Controller
          time={sessionTime}
          type="Session"
          setTime={setSessionTime}
        />
      </Item>
    </Grid>
  );
}

function App() {
  const [breakTime, setBreakTime] = useState(defaultBreakTime);
  const [sessionTime, setSessionTime] = useState(defaultSessionTime);
  const [sessionState, setSessionState] = useState({
    time: sessionTime,
    type: "Session",
    active: false,
  });

  useEffect(() => {
    let timerID;
    if (!sessionState.active) return;

    timerID = window.setInterval(decrementSessionTime, 1000);

    return () => {
      window.clearInterval(timerID);
    };
  }, [sessionState.active]);

  useEffect(() => {
    if (sessionState.time === 0) {
      const alarm = document.getElementById("beep");
      alarm.play();
      setSessionState((prev) => ({
        ...prev,
        time: prev.type === "Session" ? breakTime : sessionTime,
        type: prev.type === "Session" ? "Break" : "Session",
      }));
    }
  }, [sessionState, breakTime, sessionTime]);

  const reset = () => {
    setBreakTime(defaultBreakTime);
    setSessionTime(defaultSessionTime);
    setSessionState({
      time: defaultSessionTime,
      type: "Session",
      active: false,
    });
    const alarm = document.getElementById("beep");
    alarm?.pause();
    alarm.currentTime = 0;
  };

  const startStop = () => {
    setSessionState((prev) => ({
      ...prev,
      active: !prev.active,
    }));
  };

  const changeBreakTime = (time) => {
    if (setSessionState.active) return;
    setBreakTime(time);
  };

  const changeSessionTime = (time) => {
    if (setSessionState.active) return;
    setSessionTime(time);
    setSessionState({
      time: time,
      type: "Session",
      active: false,
    });
  };

  const decrementSessionTime = () => {
    setSessionState((prev) => ({
      ...prev,
      time: prev.time - second,
    }));
  };

  return (
    <div className="App">
      <Typography variant="h2" sx={{ textShadow: "2px 2px 10px black" }}>
        <strong>25 + 5 Clock</strong>
      </Typography>
      <Clock
        breakTime={breakTime}
        setBreakTime={changeBreakTime}
        sessionTime={sessionTime}
        setSessionTime={changeSessionTime}
        sessionState={sessionState}
        setSessionState={setSessionState}
        startStop={startStop}
        reset={reset}
      />
      <Typography
        variant="h6"
        sx={{ textShadow: "2px 2px 3px black", textDecoration: "none" }}
      >
        Designed and coded by <span style={{ marginLeft: "1px" }}></span>
        <strong>
          <a
            className="github-link"
            href="https://github.com/Austin-Buckley"
            target="_blank"
            rel="noreferrer"
          >
            Austin Buckley
          </a>
        </strong>
      </Typography>
      <audio src={Alarm} id="beep" autoPlay={false} loop={false}></audio>
    </div>
  );
}

export default App;
