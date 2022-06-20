import {createUseStyles} from "react-jss";
import React, { useState, useEffect } from 'react';
import bombayBeach from './assets/bombay-beach.jpeg'
import landing from './assets/new_pictures/landing.jpeg'

import 'typeface-lato'

const useStyles = createUseStyles({
  title: {
    color: "black",
    fontSize: "1.2rem",
    width: "50vw",
    marginTop: "3vh",
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: "2vh",
    padding: "2vh"
  },
  byline: {
    width: "60vw",
    marginTop: '1vh',
    marginBottom: 5,
    padding: 0,
    color: "black",
    fontSize: "calc(20px)",
    bottom: '1vh',
    fontFamily: 'lato',
    justifyContent: "center",
  },
  acknowledgement: {
    fontFamily: 'lato',
    textAlign: 'left',
    width: "50vw",
    margin: '1vh',
    color: "black",
    fontSize: "0.8rem",
    bottom: '1vh',
    marginBottom: 5,
    // position: "fixed",
    justifyContent: "center",
  },
  appHeader: {
    fontFamily: 'sans-serif',
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
    minWidth: '100vw',
    transition: '0.5s',
    zIndex: '-100',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: '#c3b5b0',
    paddingBottom: '10px',
  }
});

function Footer() {
    const classes = useStyles();

  return (
    <div className={classes.fullscreen}>
      <header className={classes.appHeader}>
        <p className={classes.byline}>
          Sources & Acknowledgements
        </p>
        <p className={classes.acknowledgement}>
          The postcard image and photo of Governor Newson are from the California Legislative Analyst’s
          Office and the California Governor’s Office, respectively.
          <br/> <br/>
          This project was created as part of a final project for UC Berkeley's Information Visualization and
          presentation class. Special thanks to Marti Hearst, Ian Wu, and @jsonkao for
          making this project possible.
        </p>
      </header>
    </div>
  );
}

export default Footer;
