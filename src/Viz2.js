import React, { PureComponent } from 'react';
import injectSheet from 'react-jss';
import { Scrollama, Step } from 'react-scrollama';
import diagram1 from "./assets/new_pictures/diagram1.jpg";
import diagram2 from "./assets/new_pictures/diagram2.jpg";

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
        transition: '2 s'
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

class Viz2 extends PureComponent {
    state = {
        data: 0,
        steps: [
            'More than a mile below the Salton Sea lie geothermal reservoirs full of superheated ' +
            'saltwater brine that contains lithium.',
            'Geothermal plants are already pumping the 600 degree water up from underground to generate geothermal ' +
            'energy before sending it back down.',
            'Lithium extraction would add just one more step to that process, making the Salton sea one of the cleanest ' +
            'lithium extraction operations in the world.',
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
            return 1
        } else if (step < data) {
            return 1
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
                        <img className={classes.arg} src={diagram1} width='90%' style={{
                            opacity: this.calculateOpacity(1, data, progress),
                        }} alt="lithium"/>
                        <img className={classes.arg} src={diagram2} width='90%' style={{
                            opacity: this.calculateOpacity(2, data, progress),
                        }} alt="lithium"/>
                    </div>
                </div>

            </div>
        );
    }
}

export default injectSheet(styles)(Viz2);