import React, { useState, useEffect} from 'react';
import { createUseStyles } from 'react-jss';
import { Scrollama, Step } from 'react-scrollama';
import mockup from "./assets/new_pictures/mockup.jpg";
import BarChart from "./BarChart";
import * as d3 from "d3";

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
            fontFamily: 'Merriweather',
            fontWeight: 400,
            lineHeight: '1.9rem',
            margin: 0,
        },
        '&:last-child': {
            marginBottom: 0,
        },
    },

});

const Viz1 = () => {

    // I wrote or heavily modified everything in this class

    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [stepProgress, setStepProgress] = useState(0);
    const classes = useStyles()
    const copyText = [
            'Lithium is one of the most essential minerals found in lithium-ion batteries, which power everything ' +
            'from smartphones to electric vehicles.',
            'More than 80% of the world\'s raw lithium is mined in Australia, Chile, and China. ',
            'The Salton Sea could help change that.',
            'If the Salton Sea went into production tomorrow, the US would dominate global Lithium production.'
    ]

    useEffect( () => {
        // setChart(draw())
        console.log('i fire once 2')
    }, [])

    const onStepEnter = ({ data }) => {
        setCurrentStepIndex(data);
        changeData()
    };

    const onStepExit = ({ direction, data }) => {
        if (direction === 'up' && data === 0) {
            setCurrentStepIndex(0);
            changeData()
        }
    };

    const onStepProgress = ({ progress }) => {
        setStepProgress(progress)
    };

    const lithium1 = [
        {letter: 'Australia', frequency: 103.000, color: 'blue'},
        {letter: 'Chile', frequency: 47.770, color: 'salmon'},
        {letter: 'China', frequency: 16.600, color: 'salmon'},
        {letter: 'Argentina', frequency: 13.670, color: 'salmon'},
        {letter: 'Zimbabwe', frequency: 2.650, color: 'red'},
        {letter: 'Brazil', frequency: 2.390, color: 'red'},
        {letter: 'United States', frequency: 64.400, color: 'salmon'},
        {letter: 'Canada', frequency: 1.200, color: 'red'},
        {letter: 'All Else', frequency: .900, color: 'red'},
    ]

    const lithium2 = [
        {letter: 'Australia', frequency: 103.000, color: 'blue'},
        {letter: 'Chile', frequency: 47.770, color: 'red'},
        {letter: 'China', frequency: 16.600, color: 'red'},
        {letter: 'Argentina', frequency: 13.670, color: 'red'},
        {letter: 'Zimbabwe', frequency: 2.650, color: 'red'},
        {letter: 'Brazil', frequency: 2.390, color: 'red'},
        {letter: 'United States', frequency: 1.400, color: 'salmon'},
        {letter: 'Canada', frequency: 1.200, color: 'red'},
        {letter: 'All Else', frequency: .900, color: 'red'},
    ]

    const colorFunc = (name) => name === "United States" ? "#1f8ea0" : "grey"

    const order = (a, b) => d3.ascending(a.frequency, b.frequency)
    const [data, setData] = useState(lithium2);

    const datas = [lithium1, lithium2]

    useEffect(() => {
        // const chart = changeData();
        const i = currentStepIndex > 1 ? 0 : 1
        setData(datas[i]);
        console.log(i, currentStepIndex, data[6].frequency)
    }, [currentStepIndex]);

    const changeData = () => {
        const i = currentStepIndex > 1 ? 0 : 1
        setData(datas[i]);
        console.log(i, currentStepIndex, data[6].frequency)
        // console.log(currentStepIndex)
        // console.log(data[6].frequency)
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
                                <Step data={stepIndex + 1} key={stepIndex}>
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
                    />
                </div>
            </div>

        </div>
    );

}

export default Viz1;