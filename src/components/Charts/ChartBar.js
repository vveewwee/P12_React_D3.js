import * as d3 from 'd3';
import {useEffect, useState, useRef, Fragment} from 'react';
import { user_activity as activity } from '../../mock_data/data';
import colors from '../../style/colors';
import './charts.css'
import PropTypes from 'prop-types';

/**
 * This functional Component will create an svg graph chart
 * with an API data request
 * 
 * @param {number} width
 * @param {number} height
 * @example 
 * const width = 200
 * const height = 300
 * return <ChartBar width={width} height={height}/>
 */

export default function ChartBar(props){
  const {width, height} = props;
  const margin = {top: 0, right: 20, bottom: 20, left: 20};
	const [data, setData] = useState([]);
  const svgRef = useRef();

  //once the data is generated, the drawChart function will create the chart
  useEffect(()=>{
  	data.length > 0 ?
  		drawChart() :
        generateData()
  },[data])

  //for the moment it uses the mocked data to generate data
  const generateData = () => {
    const chartData = activity[0].sessions;
    setData(chartData);
  }
  
  //the function that creates the svg element,
  // once the data is generated by the state Hook

  const drawChart = () => {

    //create an svg element with the current element of the useRef hook
    //where we will append the data rectangles
    //and use its x axis as a common axis based on the date 

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style('overflow', 'visible')
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    //x1Scale is used to build the x axis
    const x1Scale = d3.scaleBand()
      .domain(data.map(d => d.day[8] + d.day[9]))
      .range([0, width - margin.right]);

    const xAxis = d3.axisBottom(x1Scale)
      .ticks(data.length + 1).tickSize(0);
      // .tickPadding(10)

    //append it to the svg and position it on the bottom with transform attribute
    svg
      .append("g")
      .attr('transform', `translate(-20,${height-margin.bottom})`)
      .call(xAxis)
        .style('opacity', "0.3")
      //  .select('.domain').remove();

    //calculating the min and max value of our data element
    //which in this case they're already numerical 
    const minY = d3.min(data , (d)=> d.kilogram);
    const maxY = d3.max(data, (d)=>d.kilogram);
// TODO remove the hard coded numbers && replace by minY && maxY
     
    //create y scale, to build the y axis of the kilogram data
    const yScale = d3.scaleLinear()
      .domain([minY - 2, maxY + 25]).range([0, height-margin.bottom]);

    //create the y axis
    const yAxis = d3.axisRight(yScale)

    //append it to the first svg
    //position it on the right with transfrom attribute
    svg
      .select("g")
      .call(yAxis)
        .attr('opacity', "0");
    
    //create a second y scale on each we will use for the calories data 
    const y2Scale = d3.scaleLinear()
      .domain([0, 700])
      .range([0, height-margin.bottom]);

    const y2Axis = d3.axisRight(y2Scale);
    
    //append it on the svg element
    svg
      .select('g')
      .call(y2Axis)
        .attr('opacity', "0");

    //create the yscale that will hold values as shown on the mock
    const y3Scale = d3.scaleLinear()
      .domain([69, 71])
      .range([height-margin.bottom, 60]);

    const y3Axis = d3.axisRight(y3Scale).ticks(2).tickSize(-width).tickPadding(10);

    svg
      .select('g')
      .attr('transform', `translate(${width - margin.right}, 0)`)
      .call(y3Axis)
        .attr('opacity', "0.3")
  

//TODO just for fun, to be removed
// eslint-disable-next-line
    const color = d3.scaleLinear()
      .domain([0,450])
      .range(["#E674EF", "#F7E499"])

    //create the rectangles for displaying the calories
  // eslint-disable-next-line
    const calobars = svg
      .selectAll('rect')
      .data(data)
      .enter()
        .append("rect")
        .style('margin-left', "20px")
        .attr("width", d => 7)
        .attr("height", d => y2Scale(d.calories))
        .attr("x" , (d, i) => i * (width/ data.length) + 14 )
        .attr("y", d => (height - margin.bottom) - y2Scale(d.calories))
        .attr('rx', '2')
        .attr('class', 'bars')
        .attr("fill", `${colors.chartRed}`);

    //create the rectangles for displaying the kilograms
  // eslint-disable-next-line
    const kilobars = svg
	    .selectAll("circle")
      .attr("fill", "red")
	    .data(data)
      .enter()
        .append('rect')
        .attr('width', d => 7) //scale it with the xscale
	      .attr('height', d => yScale(d.kilogram))
	      .attr('x', (d,i)=> i * (width / data.length)) //positioning our kilobars on the x axis
	      .attr('y', d => (height - margin.bottom) - yScale(d.kilogram)) //vertical coordinate
	      .attr('rx', '2')
        .style("padding", "2px")
	      .style("margin", "35px")
		    .attr('class', 'bars')
        .attr('fill', `${colors.chartBlack}`)
        // .attr('fill', (d,i) => color(i * d.kilogram));
// eslint-disable-next-line        
      const kilobarLabel = svg
        .append('circle')
        .attr('cx',300)
        .attr('cy', margin.bottom)
        .attr('r', 4)
        .attr('fill', "#E60000")
// eslint-disable-next-line       
      const textKg = svg
        .append('text')
        .text('Poids')
        .attr('x', 310)
        .attr('y', margin.bottom + 5)
        .style('font-size', "12px")
        .style('font-weight', "200")
// eslint-disable-next-line
      const calobarLabel = svg
        .append('circle')
        .attr('cx',360)
        .attr('cy', margin.bottom)
        .attr('r', 4)
        .attr('fill', "black")
// eslint-disable-next-line
      const textCal= svg
        .append('text')
        .text('Calories Brulées (kCal)')
        .attr('x', 370)
        .attr('y', margin.bottom + 5)
        .style('font-size', "12px")
        .style('font-weight', "200")
// eslint-disable-next-line
      const label = svg
        .append('text')
        .text('Activité quotidienne')
        .attr('x', -margin.left)
        .attr('y', margin.bottom)
        .style('font-size', "12px")

  }

  return (
  <Fragment>
      <div style={{paddingTop:"10px"}}>
      <svg ref={svgRef}></svg>
      </div>
  </Fragment>
    )
}

ChartBar.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
}