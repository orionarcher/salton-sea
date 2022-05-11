import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import { Scrollama, Step } from 'react-scrollama';
import {ReactComponent as Phones} from './assets/individual_svg/panel-1-each.svg'
import {ReactComponent as Cars} from './assets/individual_svg/panel-2-each.svg'
import {ReactComponent as Planets} from './assets/individual_svg/panel-3-each.svg'

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

class MillionMetricTons extends PureComponent {
    state = {
        data: 0,
        steps: [
            'According to estimates, the Salton Sea reservoir contains more than 1,000,000 metric tons of ' +
            'lithium—enough to meet current global demand. Its enough lithium to build 40 million Tesla Model 3\'s ' +
            'or 100 billion iPhones.',
            'If you used 1,000,000 tons of lithium in a single battery, you could drive a Tesla Model 3 to Pluto ' +
            '… and back.',
            'If you started watching YouTube before the dinosaurs went extinct, you would run out of battery around ' +
            'today. In that time you could watch all of YouTube 20 times over.',
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
        console.log(step, data, progress)
        if (step === data) {
            return progress
        } else if (step === data - 1) {
            return 1 - progress * 1.5
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
                            debug
                        >
                            {steps.map((value, index) => {
                                const isVisible = value === data;
                                const background = isVisible
                                    ? `rgba(44,127,184, ${progress})`
                                    : 'white';
                                const visibility = isVisible ? 'visible' : 'hidden';
                                return (
                                    <Step data={index + 1} key={index}>
                                        <div
                                            className={classes.step}
                                            // style={{ background }}
                                        >
                                            <p>{value}</p>
                                            {/*<p style={{ visibility }}>*/}
                                            {/*    {Math.round(progress * 1000) / 10 + '%'}*/}
                                            {/*</p>*/}
                                        </div>
                                    </Step>
                                );
                            })}
                        </Scrollama>
                    </div>
                    <div className={classes.graphic}>
                        <div className={classes.arg}>
                            <Phones width="100%" transion='2s' opacity={this.calculateOpacity(1, data, progress)}/>
                            <Cars width="100%" transion='2s' opacity={this.calculateOpacity(1, data, progress)}/>
                        </div>
                        <div className={classes.arg}>
                            <Planets width="100%" top='0vh' opacity={this.calculateOpacity(2, data, progress)}/>

                        </div>
                        {/*<Phones width="100%" transion='2s' opacity={this.calculateOpacity(1, data, progress)}/>*/}
                        {/*<Cars width="100%" transion='2s' opacity={this.calculateOpacity(1, data, progress)}/>*/}
                        {/*/!*<Planets width="100%" position='100px 100px' opacity={this.calculateOpacity(2, data, progress)}/>*!/*/}
                    </div>
                </div>

            </div>
        );
    }
}

export default injectSheet(styles)(MillionMetricTons);