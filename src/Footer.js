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
    width: "60vw",
    margin: '2vh',
    color: "black",
    fontSize: "calc(14px)",
    bottom: 10,
    // position: "fixed",
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
    height: '15vh',
    minWidth: '100vw',
    // minHeight: '100vh',
    transition: '0.5s',
    zIndex: '-100',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: 'rgb(251,251,251)',

// backgroundImage: `url(${landing})`
  }
});

function Footer() {
    const classes = useStyles();

  return (
    <div className={classes.fullscreen}>
      <header className={classes.appHeader}>
        <p className={classes.acknowledgement}>
          Data for the first and second plots came from {' '}
          <a href="https://www.world-mining-data.info/?World_Mining_Data">
            {'Austrian Federal Ministry of Agriculture, Regions and Tourism'}
          </a> and {' '}
          <a href="https://www.iea.org/data-and-statistics/charts/total-lithium-demand-by-sector-and-scenario-2020-2040">
            {'The International Energy Authority'}
          </a> respectively. <br/> <br/>
          This project was created as part of a final project for UC Berkeley's Information Visualization and
          presentation class. Special thanks to Marti Hearst, Ian Wu, and @jsonkao for
          making this project possible.
        </p>
      </header>
    </div>
  );
}

export default Footer;
