import React, { useState, useEffect } from 'react';
// import './styles.css'
import {createUseStyles} from "react-jss";


const ImagesDiv = (props) => {
    // const imagesToBePreloaded = [newsom, pollution, postcard, salton_sea]
    // imagesToBePreloaded.forEach(image => { new Image().src = image })
    const images = props.images
    images.forEach(image => { new Image().src = image })
    return (
        // <img className={"fullscreen"} src={images[props.index]}/>
        <div
            className={props.style}
            style= {{
                backgroundImage: `url(${images[props.index]})`
            }}
        >
            {images.map(image => <img src={image} width='1px' height='1px' style={{opacity: 0}} alt='alt'/>)}
        </div>

    )
}

export default ImagesDiv;