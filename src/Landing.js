import {createUseStyles} from "react-jss";
import React, { useState, useEffect } from 'react';
import bombayBeach from './assets/bombay-beach.jpeg'
import landing from './assets/new_pictures/landing.jpeg'


const useStyles = createUseStyles({
  title: {
    color: "black",
    fontSize: "calc(10px + 4vmin)",
    width: "70vw",
    marginTop: "3vh",
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: "10px",
    padding: "10px"
  },
  byline: {
    color: "black",
    fontSize: "calc(10px + 2vmin)",
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    // borderRadius: "10px",
    justifyContent: "center",
    position: "absolute",
    bottom: "2vh",
    // marginTop: "60vh",
    width: "40vw",
  },
  acknowledgement: {
    margin: 0,
    color: "black",
    fontSize: "calc(14px)",
    bottom: 0,
    position: "absolute",
    justifyContent: "center",
  },
  appHeader: {
    fontFamily: 'Merriweather',
    // backgroundColor: "#fff",
    // minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
  fullscreen: {
    textAlign: 'center',
    padding: '0',
    margin: '0',
    height: '100vh',
    minWidth: '100vw',
    minHeight: '100vh',
    transition: '0.5s',
    zIndex: '-100',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: `url(${landing})`
  }
});

function Landing() {
    const classes = useStyles();

  return (
    <div className={classes.fullscreen}>
      <header className={classes.appHeader}>
        {/*<div className={classes.fullscreen}></div>*/}
        <div>
          <p className={classes.title}>
            California’s Largest Lake: From Environmental Disaster to Green Powerhouse?
          </p>
          <p className={classes.byline}>
            By Orion Cohen and Derek Schwabe
          </p>
        </div>
        <p className={classes.acknowledgement}>
          Created as part of a final project for UC Berkeley's Information Visualization and
          presentation class. Special thanks to React Scrollama and it's creator @jsonkao for
          making this project possible.
        </p>
      </header>
    </div>
  );
}

export default Landing;
