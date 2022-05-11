import React, { useState, useEffect } from 'react';
import newsom from './assets/newsom.jpeg'
import pollution from './assets/pollution.jpeg'
import postcard from './assets/postcard.jpeg'
import salton_sea from './assets/salton_sea.jpeg'
// import './styles.css'
import {createUseStyles} from "react-jss";
import bombay_beach from "./assets/bombay-beach.jpeg";
import saltonSeaMotel from "./assets/salton-sea-motel.jpeg";

const useStyles = createUseStyles({
    fullscreen: {
    position: 'sticky',
    padding: '0',
    margin: '0',
    height: '100vh',
    minWidth: '100vw',
    minHeight: '100vh',
    transition: '1.3s',
    zIndex: '-100',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: 'darkgray',
}

});

const OpeningImagesDiv = (props) => {
    // const imagesToBePreloaded = [newsom, pollution, postcard, salton_sea]
    // imagesToBePreloaded.forEach(image => { new Image().src = image })
    const images = props.images
    images.forEach(image => { new Image().src = image })
    const classes = useStyles()
    return (
        // <img className={"fullscreen"} src={images[props.index]}/>
        <div
            className={classes.fullscreen}
            style= {{
                backgroundImage: `url(${images[props.index]})`
            }}
        >
            {images.map(image => <img src={image} style={{opacity: 0}}/>)}
        </div>

    )
}

export default OpeningImagesDiv;