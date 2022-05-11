import React, { PureComponent } from 'react';
import * as d3 from "d3";
import { useRef, useEffect, useState} from 'react';

function BarChart({ width, height, data, step, colorFunc, order}){
    const ref = useRef();

    // I wrote everything above draw()

    const [chart, setChart] = useState(null)

    useEffect( () => {
        setChart(draw())
    }, [])

    useEffect(() => {
        if (chart != null) {
            chart.update(d3.sort(data, order))
        }
    }, [step]);


    function draw() {
        // I reformatted this section to work for my code
        const x = d => d.letter // given d in data, returns the (ordinal) x-value
        const y = d => d.frequency // given d in data, returns the (quantitative) y-value
        const marginTop = 20 // the top margin, in pixels
        const marginRight = 0 // the right margin, in pixels
        const marginBottom = 30 // the bottom margin, in pixels
        const marginLeft = 40 // the left margin, in pixels
        const width = 640 // the outer width of the chart, in pixels
        const height = 400 // the outer height of the chart, in pixels
        const xRange = [marginLeft, width - marginRight] // [left, right]
        const yType = d3.scaleLinear // type of y-scale
        const yFormat = 'r'
        const yLabel = '↑ Amount'
        const yRange = [height - marginBottom, marginTop] // [bottom, top]
        const xPadding = 0.1 // amount of x-range to reserve to separate bars\
        const color = colorFunc // bar fill color
        const initialDuration = 1500 // transition duration, in milliseconds
        const initialDelay = (_, i) => i * 20 // per-element transition delay, in milliseconds

        // Everything below this is not my code

        // Compute values.
        const X = d3.map(data, x);
        const Y = d3.map(data, y);

        // Compute default domains, and unique the x-domain.
        var xDomain = X;
        var yDomain = [0, d3.max(Y)];
        var xDomain = new d3.InternSet(xDomain);


        // Omit any data not present in the x-domain.
        const I = d3.range(X.length).filter(i => xDomain.has(X[i]));

        // Construct scales, axes, and formats.
        const xScale = d3.scaleBand(xDomain, xRange).padding(xPadding);
        const yScale = yType(yDomain, yRange);
        const xAxis = d3.axisBottom(xScale).tickSizeOuter(0);
        const yAxis = d3.axisLeft(yScale).ticks(height / 40, yFormat);
        const format = yScale.tickFormat(100, yFormat);

        const svg = d3.select(ref.current)
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", [0, 0, width, height])
            .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

        const yGroup = svg.append("g")
            .attr("transform", `translate(${marginLeft},0)`)
            .call(yAxis)
            .call(g => g.select(".domain").remove())
            .call(g => g.selectAll(".tick").call(grid))
            .call(g => g.append("text")
                .attr("x", -marginLeft)
                .attr("y", 10)
                .attr("fill", "currentColor")
                .attr("text-anchor", "start")
                .text(yLabel));

        let rect = svg.append("g")
            .selectAll("rect")
            .data(I)
            .join("rect")
            .attr("fill", (d, i) => color(data[i].letter))

            .property("key", i => X[i]) // for future transitions
            .call(position, i => xScale(X[i]), i => yScale(Y[i]))
            .style("mix-blend-mode", "multiply")
            .call(rect => rect.append("title")
                .text(i => [X[i], format(Y[i])].join("\n")));

        const xGroup = svg.append("g")
            .attr("transform", `translate(0,${height - marginBottom})`)
            .call(xAxis);

        // A helper method for updating the position of bars.
        function position(rect, x, y) {
            return rect
                .attr("x", x)
                .attr("y", y)
                .attr("height", typeof y === "function" ? i => yScale(0) - y(i) : i => yScale(0) - y)
                .attr("width", xScale.bandwidth());
        }

        // A helper method for generating grid lines on the y-axis.
        function grid(tick) {
            return tick.append("line")
                .attr("class", "grid")
                .attr("x2", width - marginLeft - marginRight)
                .attr("stroke", "currentColor")
                .attr("stroke-opacity", 0.1);
        }

        // Call chart.update(data, options) to transition to new data.
        return Object.assign(svg.node(), {
            update(data, {
                xDomain, // an array of (ordinal) x-values
                yDomain, // [ymin, ymax]
                duration = initialDuration, // transition duration, in milliseconds
                delay = initialDelay // per-element transition delay, in milliseconds
            } = {}) {
                // Compute values.
                const X = d3.map(data, x);
                const Y = d3.map(data, y);

                // Compute default domains, and unique the x-domain.
                if (xDomain === undefined) xDomain = X;
                if (yDomain === undefined) yDomain = [0, d3.max(Y)];
                xDomain = new d3.InternSet(xDomain);

                // Omit any data not present in the x-domain.
                const I = d3.range(X.length).filter(i => xDomain.has(X[i]));

                // Update scale domains.
                xScale.domain(xDomain);
                yScale.domain(yDomain);

                // Start a transition.
                const t = svg.transition().duration(duration);

                // Join the data, applying enter and exit.
                rect = rect
                    .data(I, function(i) { return this.tagName === "rect" ? this.key : X[i]; })
                    .join(
                        enter => enter.append("rect")
                            .property("key", i => X[i]) // for future transitions
                            .call(position, i => xScale(X[i]), yScale(0))
                            .style("mix-blend-mode", "multiply")
                            .call(enter => enter.append("title")),
                        update => update,
                        exit => exit.transition(t)
                            .delay(delay)
                            .attr("y", yScale(0))
                            .attr("height", 0)
                            .remove()
                    );

                // Update the title text on all entering and updating bars.
                rect.select("title")
                    .text(i => [X[i], format(Y[i])].join("\n"));

                // Transition entering and updating bars to their new position. Note
                // that this assumes that the input data and the x-domain are in the
                // same order, or else the ticks and bars may have different delays.
                rect.transition(t)
                    .delay(delay)
                    .call(position, i => xScale(X[i]), i => yScale(Y[i]));

                // Transition the x-axis (using a possibly staggered delay per tick).
                xGroup.transition(t)
                    .call(xAxis)
                    .call(g => g.selectAll(".tick").delay(delay));

                // Transition the y-axis, then post process for grid lines etc.
                yGroup.transition(t)
                    .call(yAxis)
                    .selection()
                    .call(g => g.select(".domain").remove())
                    .call(g => g.selectAll(".tick").selectAll(".grid").data([,]).join(grid));
            }
        });
    }


    return (
        <div className="chart">
            <svg ref={ref}></svg>
        </div>

    )

}

export default BarChart;
