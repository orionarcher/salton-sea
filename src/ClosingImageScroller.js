import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { createUseStyles } from 'react-jss';
import impoverished from './assets/new_pictures/impoverished.jpeg'
import zoomOut from './assets/new_pictures/zoomOut.jpeg'
import './styles.css'
import ImagesDiv from "./ImagesDiv";

const useStyles = createUseStyles({
    stepsContainer: {
        overflow: 'auto',
        paddingBottom: '0vh',
    },
    step: {
        position: 'relative',
        marginBottom: '80vh',
        marginTop: '0vh',
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
});


const ClosingImageScroller = () => {
    // const imagesToBePreloaded = [saltonSeaMotel]
    // imagesToBePreloaded.forEach(image => { new Image().src = image })
    const images = [
        impoverished,
        zoomOut,
    ]
    images.forEach(image => { new Image().src = image })
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const classes = useStyles()
    const copyText = [
        'Still, lithium extraction could be transformational for the high-poverty communities surrounding the lake, ' +
        'which have some of the highest unemployment rates in the state.',
        'Even though the Salton Sea’s lithium deposits aren’t sufficient to significantly impact future global ' +
        'markets, it could be a game changer for the region and the state.'
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

                <ImagesDiv index={currentStepIndex} images={images}/>
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

export default ClosingImageScroller;
