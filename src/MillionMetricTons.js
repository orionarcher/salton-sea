import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import { Scrollama, Step } from 'react-scrollama';
import {ReactComponent as Pile} from './assets/individual_svg/panel-1-a.svg'
import {ReactComponent as Phones} from './assets/individual_svg/panel-1-b.svg'
import {ReactComponent as Cars} from './assets/individual_svg/panel-1-c.svg'
import {ReactComponent as Planets} from './assets/individual_svg/panel-1-d.svg'
import lithium from './assets/individual_svg/lithium.jpg'
import cars from './assets/individual_svg/cars.jpg'
import phones from './assets/individual_svg/phones.jpg'
// import planets from './assets/individual_svg/planets.jpg'
import planets from './assets/new_pictures/circularPlanets.jpg'
import li1 from "./assets/mockups/li-1.jpg";
import li2 from "./assets/mockups/li-2.jpg";
import li3 from "./assets/mockups/li-3.jpg";


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
            'lithium—enough to meet current global demand.',
            'That’s enough energy to build 100 million smartphones.',
            'Or 40 million electric cars.',
            'If you used 1,000,000 tons of lithium in a single battery, you could drive a Tesla Model 3 to Pluto ' +
            '… and back.',
            // 'If you started watching YouTube before the dinosaurs went extinct, you would run out of battery around ' +
            // 'today. In that time you could watch all of YouTube 20 times over.',
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
                            offset={0.6}
                            // debug
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
                        <img className={classes.arg} src={lithium} width='100%' style={{
                            opacity: this.calculateOpacity(1, data, progress),
                        }} alt="lithium"/>
                        <img className={classes.arg} src={phones} width='100%' style={{
                            opacity: this.calculateOpacity(2, data, progress),
                        }} alt="lithium"/>
                        <img className={classes.arg} src={cars} width='100%' style={{
                            opacity: this.calculateOpacity(3, data, progress),
                        }} alt="lithium"/>
                        <img className={classes.arg} src={planets} width='100%' style={{
                            opacity: this.calculateOpacity(4, data, progress),
                            marginTop: '41vh'
                        }} alt="lithium"/>
                    </div>
                </div>

            </div>
        );
    }
}

export default injectSheet(styles)(MillionMetricTons);