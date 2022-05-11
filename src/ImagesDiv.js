import React, { useState, useEffect } from 'react';
// import './styles.css'
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    fullscreen: {
    position: 'sticky',
    padding: '0',
    margin: '0',
    height: '100vh',
    minWidth: '100vw',
    minHeight: '100vh',
    transition: '1s',
    zIndex: '-100',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: 'darkgray',
}

});

const ImagesDiv = (props) => {
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
            {images.map(image => <img src={image} width='1px' height='1px' style={{opacity: 0}} alt='alt'/>)}
        </div>

    )
}

export default ImagesDiv;