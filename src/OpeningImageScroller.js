import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { createUseStyles } from 'react-jss';
import CrossfadeImage from "react-crossfade-image";
import bombay_beach from './assets/bombay-beach.jpeg'
import pollution2 from './assets/new_pictures/pollution2.jpeg'
import lake from './assets/new_pictures/lake.jpeg'
import newsom from './assets/newsom.jpeg'
import pollution from './assets/pollution.jpeg'
import postcard from './assets/postcard.jpeg'
import './css/styles.css'
import ImagesDiv from "./ImagesDiv";
import salton_sea from "./assets/salton_sea.jpeg";

const useStyles = createUseStyles({
    stepsContainer: {
        overflow: 'auto',
        paddingBottom: '20vh',
    },
    step: {
        position: 'relative',
        marginBottom: '80vh',
        marginTop: '0',
        display: 'flex',
        justifyContent: 'center',
    },
    stepText: {
        backgroundColor: 'rgba(255, 255, 255, 0.99)',
        maxWidth: '510px',
        textAlign: 'center',
        color: '#111',
        padding: '1.3rem',
        fontSize: '1.3rem',
        fontFamily: 'Merriweather',
        fontWeight: 400,
        lineHeight: '1.9rem',

        // Fixes a problem in Safari where background color is transparent
        transform: 'translate3d(0, 0, 0)',
    },
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


const OpeningImageScroller = () => {
    const images = [
        lake,
        postcard,
        pollution2,
        newsom,
    ]
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const classes = useStyles()
    const copyText = [
        'It’s the largest enclosed lake in California. The Salton Sea, created by accident when an irrigation canal ' +
        'flooded in the 1950s, is a 343-square-mile lake in the middle of Southern California’s barren Colorado Desert.',
        'From the 1960s-1970s, the lake’s warm, sandy beaches drew throngs of tourists, at one point even more than ' +
        'Yosemite. But that all changed when pesticide runoff from nearby farms started leaching into the lake.',
        'Today, the Salton Sea is highly polluted and is drying up, leaving behind toxic dust that’s causing ' +
        'respiratory problems in nearby communities. It’s been called the greatest environmental disaster in the ' +
        'state’s history.',
        'Earlier this year, California Governor Gavin Newsom announced plans to transform the Salton Sea into a ' +
        'center of lithium production, calling it the  “Saudi Arabia of Lithium.”'
    ]
    // This callback fires when a Step hits the offset threshold. It receives the
    // data prop of the step, which in this demo stores the index of the step.
    const onStepEnter = ({ data }) => {
        setCurrentStepIndex(data);
    };
    // const onStepEnter = (e) => {
    //     const { data } = e;
    //     setCurrentStepIndex(data);
    // };

    return (
        <div
            // style={{ margin: '50vh 0', border: '2px dashed skyblue' }}
            style={{ marginTop: 0 }}
        >
            <div style={{
                position: 'sticky',
                top: 0,
                // border: '1px solid',
                width: '100vw',
                height: '100vh',
            }}>

                <ImagesDiv index={currentStepIndex} images={images} style={classes.fullscreen} />
            </div>
            <div className={classes.stepsContainer}>
                <Scrollama
                    onStepEnter={onStepEnter}
                    offset={0.6}
                    threshold={1}
                    // debug
                >
                    {copyText.map((copy, stepIndex) => (
                        <Step data={stepIndex} key={stepIndex}>
                            <div
                                className={classes.step}
                                style={{
                                    opacity: currentStepIndex === stepIndex ? 0.9 : 0.9,
                                }}
                            >
                                <p className={classes.stepText}>
                                    {copy}
                                </p>
                            </div>
                        </Step>
                    ))}
                </Scrollama>
            </div>
        </div>
    );
};

export default OpeningImageScroller;
