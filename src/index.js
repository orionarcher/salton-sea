import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
// import App from "./App";
import reportWebVitals from './misc/reportWebVitals';
import OpeningImageScroller from "./OpeningImageScroller";
import ClosingImageScroller from "./ClosingImageScroller";
import Landing from "./Landing";

import bombay_beach from './assets/bombay-beach.jpeg'
import newsom from './assets/newsom.jpeg'
import pollution from './assets/pollution.jpeg'
import postcard from './assets/postcard.jpeg'
import salton_sea from "./assets/salton_sea.jpeg";
import saltonSeaMotel from './assets/salton-sea-motel.jpeg'
import Viz3 from "./Viz3";
import GrowthPlot from "./GrowthPlot";
import BarChartTest from "./testing/BarChartTest";
import App from "./testing/App";
import Viz1 from "./Viz1";
import Viz4 from "./Viz4";
import Viz2 from "./Viz2";

const imagesToBePreloaded = [bombay_beach, newsom, pollution, postcard, salton_sea, saltonSeaMotel]
imagesToBePreloaded.forEach(image => { new Image().src = image })


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <div>
      {/*<Landing />*/}

      {/*<OpeningImageScroller />*/}
      {/*<Viz1 />*/}
      <Viz2 />
      <Viz3 />
      <Viz4 />
      <ClosingImageScroller />
    </div>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
