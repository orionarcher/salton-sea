import React, { useState, useEffect} from 'react';
import { createUseStyles } from 'react-jss';
import { Scrollama, Step } from 'react-scrollama';
import mockup from "./assets/new_pictures/mockup.jpg";
import BarChart from "./BarChart";
import * as d3 from "d3";

import 'typeface-lato'

const useStyles = createUseStyles({
    graphicContainer: {
        padding: '40vh 2vw 30vh',
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
        backgroundColor: '#fff',
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
        maxWidth: '95%',

        // top: '20vh',
        // height: '60vh',
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
    caption: {
        fontSize: '0.6rem',
        position: 'relative',
        top: '-3vh',
        textAlign: 'left'
    }

});

const Viz4 = () => {

    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [stepProgress, setStepProgress] = useState(0);
    const classes = useStyles()

    const copyText = [
        'Current global lithium production is around 80 kilotons per year.',
        'But global demand is expected to grow nearly 20-fold by 2050. This would vastly outpace current supply.',
        'In the long term, the Salton Sea region will become just one contributor to a ballooning global ' +
        'market—but a strategically critical one for U.S. energy independence.'
    ]

    const onStepEnter = ({ data }) => {
        setCurrentStepIndex(data);
        changeData()
    };

    const onStepExit = ({ direction, data }) => {
        if (direction === 'up' && data === 0) {
            setCurrentStepIndex(0);
            // changeData()
        }
    };

    const onStepProgress = ({ progress }) => {
        setStepProgress(progress)
    };

    const demand1 = [
        {letter: '2020', frequency: 74, color: 'blue'},
        {letter: '2025', frequency: 0, color: 'blue'},
        {letter: '2030', frequency: 0, color: 'salmon'},
        {letter: '2035', frequency: 0, color: 'salmon'},
        {letter: '2040', frequency: 0, color: 'salmon'},
    ]

    const demand2 = [
        {letter: '2020', frequency: 74, color: 'blue'},
        {letter: '2025', frequency: 157, color: 'blue'},
        {letter: '2030', frequency: 242, color: 'salmon'},
        {letter: '2035', frequency: 700, color: 'salmon'},
        {letter: '2040', frequency: 1160, color: 'salmon'},
    ]

    const colorFunc = (name) => name === "United States" ? "#1f8ea0" : "#1f8ea0"
    const order = (a, b) => d3.ascending(a.letter, b.letter)

    const [data, setData] = useState(demand1);

    const changeData = () => {
        setData((currentStepIndex > 1) ? demand2 : demand1);
    }

    return (
        <div>

            <div className={classes.graphicContainer}>
                <div className={classes.scroller}>
                    <Scrollama
                        onStepEnter={onStepEnter}
                        onStepExit={onStepExit}
                        progress
                        onStepProgress={onStepProgress}
                        offset="400px"
                        // debug
                    >
                        {copyText.map((value, stepIndex) => {
                            return (
                                <Step data={stepIndex + 2} key={stepIndex}>
                                    <div className={classes.step}>
                                        <p>{value}</p>
                                    </div>
                                </Step>
                            );
                        })}
                    </Scrollama>
                </div>
                <div className={classes.graphic}>
                    <BarChart
                        width='600px'
                        height='600px'
                        data={data}
                        step={currentStepIndex}
                        colorFunc={colorFunc}
                        order={order}
                        chartTitle={'Current and Projected Annual Demand'}
                        axisTitle={'↑ Kilotons Lithium'}
                    />
                    <div className={classes.caption}>
                        Source: {' '}
                        <a href={"https://www.world-mining-data.info/?World_Mining_Data"}>
                            Austrian Federal Ministry of Agriculture, Regions and Tourism</a>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default Viz4;