import injectSheet, {createUseStyles} from 'react-jss';
import { Scrollama, Step } from 'react-scrollama';
import diagram1 from "./assets/new_pictures/diagram1.jpg";
import diagram2 from "./assets/new_pictures/diagram2.jpg";
import ImagesDiv from "./ImagesDiv";
import impoverished from "./assets/new_pictures/impoverished.jpeg";
import zoomOut from "./assets/new_pictures/zoomOut.jpeg";
import React, { useState, useEffect } from 'react';

import 'typeface-lato'


const useStyles = createUseStyles({
    graphicContainer: {
        padding: '40vh 2vw 60vh',
        display: 'flex',
        justifyContent: 'space-between',
    },
    graphic: {
        flexBasis: '60%',
        flexDirection: 'column',
        position: 'sticky',
        width: '100%',
        height: '60vh',
        top: '20vh',
        // backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& p': {
            fontSize: '5rem',
            fontWeight: 700,
            textAlign: 'center',
            color: '#fff',
        },
    },
    arg: {
        flexBasis: '60%',
        flexDirection: 'column',
        position: 'absolute',
        transition: '1s',
        maxWidth: '95%',
        maxHeight: '130%',
    },
    scroller: {
        flexBasis: '35%',
    },
    step: {
        margin: '0 auto 60vh auto',
        padding: '20px 0',
        // border: '1px solid #333',
        backgroundColor: 'rgb(247,247,247)',
        '& p': {
            textAlign: 'center',
            padding: '1.3rem',
            fontSize: '1.3rem',
            fontFamily: 'lato',
            fontWeight: 400,
            lineHeight: '1.9rem',
            margin: 0,
        },
        '&:last-child': {
            marginBottom: 0,
        },
    },

});

const Viz2 = () => {
    const images = [
        diagram1,
        diagram1,
        diagram2,
        diagram2,
    ]

    images.forEach(image => { new Image().src = image })
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const classes = useStyles()
    const copyText = [
        'More than a mile below the Salton Sea and the surrounding areas lie geothermal reservoirs full of superheated ' +
        'saltwater brine that contains lithium.',
        'Geothermal plants are already pumping the 600 degree water up from underground to generate geothermal ' +
        'energy before sending it back down.',
        'Extracting Lithium from the brine would simply add one more step to this closed-loop process.',
        'Since no new mining is needed, the Salton sea would be one of the cleanest lithium extraction operations in the world.',
    ]

    const onStepEnter = ({ data }) => {
        setCurrentStepIndex(data);
    };

    const onStepExit = ({ direction, data }) => {
        if (direction === 'up' && data === 0) {
            setCurrentStepIndex(data);
        }
    };


    return (
        <div>
            <div className={classes.graphicContainer}>
                <div className={classes.scroller}>
                    <Scrollama
                        onStepEnter={onStepEnter}
                        onStepExit={onStepExit}
                        progress
                        // onStepProgress={onStepProgress}
                        offset={0.6}
                        // debug
                    >
                        {copyText.map((value, index) => {

                            return (
                                <Step data={index + 1} key={index} >
                                    <div className={classes.step} >
                                        <p>{value}</p>
                                    </div>
                                </Step>
                            );
                        })}
                    </Scrollama>
                </div>
                <div className={classes.graphic}>
                    <img src={diagram1} className={classes.arg} style={{
                        opacity: currentStepIndex <= 2 ? 1 : 1
                    }} alt={'121'}/>
                    <img src={diagram2} className={classes.arg} style={{
                        opacity: currentStepIndex > 2 ? 1 : 0
                    }} alt={'121'}/>
                </div>
            </div>
        </div>
    );
}

export default Viz2;