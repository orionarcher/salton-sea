import {createUseStyles} from "react-jss";
import React, { useState, useEffect } from 'react';
import bombayBeach from './assets/bombay-beach.jpeg'
import landing from './assets/new_pictures/landing.jpeg'

import 'typeface-roboto'
import 'typeface-lato'


const useStyles = createUseStyles({
  title: {
    color: "black",
    fontSize: "calc(10px + 4vmin)",
    width: "70vw",
    marginTop: "35vh",
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: "10px",
    padding: "20px",
    marginBottom: 0,
    paddingBottom: 5,
    paddingTop: 0,
    // lineHeight: 3,

  },
  byline: {
    color: "black",
    lineHeight: 0,
    marginTop: 0,
    paddingBottom: 20,
    fontSize: "calc(20px)",
    // backgroundColor: 'rgba(255, 255, 255, 0.6)',
    // borderRadius: "10px",
    justifyContent: "center",
    // position: "absolute",
    // bottom: "2vh",
    // marginTop: "60vh",
    // width: "70vw",
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
    fontFamily: 'lato',
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
        <div className={classes.title}>
          <p >
            California’s Largest Lake: From Environmental Disaster to Green Energy Powerhouse?
          </p>
          <p className={classes.byline}>
            By Orion Cohen and Derek Schwabe
          </p>
        </div>
      </header>
    </div>
  );
}

export default Landing;
