import React, {useState, useEffect, useRef}from 'react'
import * as d3 from 'd3'

export default function LineChart(props) {
    const {width, height} = props;
    const [data, setData] = useState([]);
    const svgRef = useRef();

    useEffect(()=>{
        data.length > 0 ? drawChart():generateData();
    },[data])

    const generateData = () => {
        const chartData = [];
        for(let i = 0; i < 20; i++){
            const value = Math.floor(Math.random() * i * 3);
            chartData.push({
                label:i,
                value
            });
        }
        setData(chartData);
    }

    const drawChart = ()=>
    {
    const margin = { top:10, right:50, bottom: 50, left: 50};

    const yMinValue = d3.min(data,d=> d.value);
    const yMaxValue = d3.max(data,d=> d.value);
    const xMinValue = d3.min(data,d=> d.label);
    const xMaxValue = d3.max(data,d=> d.label);

    //create chart area

    const svg = d3.select(svgRef.current)
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top}})`);

    //create scale for the x axis
    const xScale = d3.scaleLinear().domain([xMinValue, xMaxValue]).range([0,width]);

    // create scale for the y axis
    const yScale = d3.scaleLinear().domain([0, yMaxValue]).range([height, 0]);

    //create x grid
/*
    svg.append('g').attr('class', 'grid').attr('transform', `translate(0,${height})`).call(
        d3.axisBottom(xScale).tickSize(-height).tickFormat(''),
    );

    //create y grid
     svg.append('g').attr('class', 'grid').call(
        d3.axisLeft(yScale).tickSize(-width).tickFormat(''),
    );
    */
    //create the x axis on the bottom 
    svg.append('g').attr('class', 'x-axis').attr('transform', `translate(0,${height})`).call(
        d3.axisBottom().scale(xScale).tickSize(0)
    );

    //create the y axis on the left
    svg.append('g').attr('class', 'y-axis').call(
        d3.axisLeft(yScale)
    );

    const line = d3.line().x(d => xScale(d.label)).y(d=>yScale(d.value)).curve(d3.curveMonotoneX);

    svg.append('path').datum(data).attr('fill', 'none').attr('stroke', '#f6c3d0').attr('d', line)
}
  return (
    <div>
        <svg ref={svgRef}></svg>
    </div>
  )
}
