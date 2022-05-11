import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import { Scrollama, Step } from 'react-scrollama';
import mockup from "./assets/new_pictures/mockup.jpg";

const styles = {
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

};

class CountryBreakdown extends PureComponent {
    state = {
        data: 0,
        steps: [
            'Lithium is one of the most essential minerals found in lithium-ion batteries, which power everything ' +
            'from smartphones to electric vehicles.',
            'More than 80% of the world\'s raw lithium is mined in Australia, Chile, and China. ',
            'The Salton Sea could help change that.',
            'If the Salton Sea went into production tomorrow, the US would dominate global Lithium production.'
        ],
        progress: 0,
    };

    onStepEnter = e => {
        const { data, entry, direction} = e;
        this.setState({ data });
        console.log(data)
    };

    onStepExit = ({ direction, data }) => {
        if (direction === 'up' && data === this.state.steps[0]) {
            this.setState({ data: 0 });
        }
    };

    onStepProgress = ({ progress }) => {
        this.setState({ progress });
    };

    calculateOpacity = (step, data, progress) => {
        // console.log(step, data, progress)
        if (step === data) {
            return progress
        } else if (step === data - 1) {
            return 1 - progress
        } else {
            return 0
        }
    }

    render() {
        const { data, steps, progress } = this.state;
        const { classes } = this.props;

        return (
            <div>

                <div className={classes.graphicContainer}>
                    <div className={classes.scroller}>
                        <Scrollama
                            onStepEnter={this.onStepEnter}
                            onStepExit={this.onStepExit}
                            progress
                            onStepProgress={this.onStepProgress}
                            offset="400px"
                            // debug
                        >
                            {steps.map((value, index) => {
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
                        <img className={classes.arg} src={mockup} width='100%' alt="lithium"/>
                    </div>
                </div>

            </div>
        );
    }
}

export default injectSheet(styles)(CountryBreakdown);