import injectSheet, {createUseStyles} from 'react-jss';
import { Scrollama, Step } from 'react-scrollama';
import lithium from './assets/individual_svg/lithium.jpg'
import cars from './assets/individual_svg/cars.jpg'
import phones from './assets/individual_svg/phones.jpg'
import planets from './assets/new_pictures/circularPlanets.jpg'
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
        // maxHeight: '100%',
        // aspectRatio: 'auto',
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
    // const images = [
    //     diagram1,
    //     diagram1,
    //     diagram2,
    //     diagram2,
    // ]
    //
    // images.forEach(image => { new Image().src = image })
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const classes = useStyles()
    const copyText = [
        <a>
            <a href={"https://newscenter.lbl.gov/2022/02/16/quantifying-californias-lithium-valley-can-it-power-our-ev-revolution/"}>
                According to estimates</a>, the Salton Sea reservoir contains up to six million metric tons of
            lithium—roughly the mass of the Pyramid of Giza and enough to meet current global demand for decades.
        </a>,
        'That’s enough lithium to build 100 billion smartphones.',
        'If you put all that Lithium in a single battery, you could drive a Tesla Model 3 to Pluto and back' +
        '… five times.',
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
                                <Step data={index + 1} key={index}>
                                    <div className={classes.step}>
                                        <p>{value}</p>
                                    </div>
                                </Step>
                            );
                        })}
                    </Scrollama>
                </div>
                <div className={classes.graphic}>
                    <img src={lithium} className={classes.arg} style={{
                        opacity: currentStepIndex <= 1 ? 1 : 0
                    }} alt={'121'}/>
                    <img src={phones} className={classes.arg} style={{
                        opacity: currentStepIndex === 2 ? 1 : 0
                    }} alt={'121'}/>
                    {/*<img src={cars} className={classes.arg} style={{*/}
                    {/*    opacity: currentStepIndex === 3 ? 1 : 0*/}
                    {/*}} alt={'121'}/>*/}
                    <img src={planets} className={classes.arg} style={{
                        opacity: currentStepIndex >= 3 ? 1 : 0,
                        top: '5vh'
                    }} alt={'121'}/>
                </div>
            </div>
        </div>
    );
}

export default Viz2;