import * as d3 from 'd3';
import {useEffect, useState, useRef, Fragment} from 'react';
import { user_activity as activity } from '../../mock_data/data';
import './charts.css'
export default function Histogram(props){

	const {width, height } = props;

//	let jsonURL = "https://api.openbrewerydb.org/breweries";

	const [data, setData] = useState([]);

    const svgRef = useRef();
  useEffect(()=>{
  	data.length > 0 ?
  		drawChart() :
        generateData()
//  		getURLData()
  },[data])

  const generateData = () => {
    const chartData = activity[0].sessions;
    setData(chartData);
}

/*	// fetchs json and converts to an array from a random API I found
	// ex. [{state: 'Idaho', frequency: 1}]
	const getURLData = async () => {
	    let urlResponse = await fetch(jsonURL);
	    let jsonResult = await urlResponse.json();

	    // build a dictionary to record the frequency of each state in the json response
	    let stateFreq = {};
	    jsonResult.forEach((element) => {
	    	stateFreq[element.state] > 0 ? (
	    		stateFreq[element.state] = stateFreq[element.state] + 1
         ): (
	    		stateFreq[element.state] = 1
         )
	    	});

	    // convert the dictionary to an array
	    let stateFreqArray = Object.keys(stateFreq).map(function(key) {
	    	return {'state': key, 'frequency': stateFreq[key]};
	    })

	    // sort the array by frequency and send it to the data variable
	    setData(stateFreqArray.sort(function(a,b){return b.frequency - a.frequency}));
	}*/

	const drawChart = () => {

	// declare margins
	const margin = {top: 70, right: 50, bottom: 70, left: 50};

	// create the svg that holds the chart
    const svg = d3.select(svgRef.current)
		  .attr("width", width)
		  .attr("height", height)
		  .attr("transform",`translate(0,-${margin.bottom-10})`);

	// create the x axis scale, scaled to the states
	const xScale = d3.scaleBand()
		.domain(d3.range(data.length))
		.rangeRound([margin.left, width - margin.right])
		.padding(0.1)

	// create the y axis scale, scaled from 70 to the max
	const yScale = d3.scaleLinear()
		.domain([70, 85])
		.range([height - margin.bottom, margin.top])

	// create a scale between colors that varies by the frequency
	// const barColors = d3.scaleLinear()
	//   .domain([0,81])
	//   .range(["blue","red"])

	// set the x axis on the bottom.
    // svg.append("g")
    //   .attr('transform', `translate(0,${height-margin.bottom})`)
    //   .call(d3.axisBottom(xScale))
    //   .selectAll("rect")
    //   .data(data)
    //   .join("rect")
    //     .attr("x", (d, i)=> xScale(i))
    //     .attr("y", (d) => yScale(d.kilogram))
    //     .attr("height", d=> yScale(0) - yScale(d.kilogram))
    //     .attr("width",xScale.bandwidth() )

    // set the y axis on the right
    svg
    .append("g")
    .attr('transform', `translate(${width - margin.right},0)`)
    	.call(d3.axisRight(yScale));

	  // create the actual bars on the graph, appends a 'rect' for every data element
	  // sets the x and y positions relative to the scales already established
	  // sets the height according to the yscale
	  // static bar width, color is scaled on the y axis
	  // finally the bars have an outline
    //  const rx = 12;
    //    const ry = 12;
  //create y grid
  svg
  .append('g')
  .attr('class', 'grid')
  .attr('opacity', "0.1")
  .call(d3.axisLeft(yScale)
    .tickSize(-width)
    .tickFormat(''));


	const kilobars = svg
      .append('g')
      .attr('fill', 'royalblue')
	  .selectAll("rect")
	  .data(data)
	  .join("rect")
	    .attr('x', (d, i)=> xScale(i))
	    .attr('y', d => yScale(d.kilogram))
	    .attr('width', xScale.bandwidth())
	    .attr('height', d => yScale(0) - yScale(d.kilogram))
	    .style("padding", "2px")
	    .style("margin", "5px")
	    .style("width", d => `${d}px`)
		.attr('class', 'kilobars')
        
    /*    const circle = svg
        .selectAll("ellipse")
        .data(data)
        .enter().append("ellipse")
            .attr("cx", d => (xScale(d.state)+ 11))
            .attr("cy",d => yScale(d.frequency) + 2)
            .attr("rx", 11)
            .attr("ry", 10)
            .style("padding", "5px")
            .style("margin", "1px")
            .attr("fill", function(d) {return barColors(d.day)})*/

}

return (
<Fragment>
    <div style={{backgroundColor:"red",paddingTop:"10px"}}>
    <svg ref={svgRef}></svg>
    </div>
</Fragment>
	)
}