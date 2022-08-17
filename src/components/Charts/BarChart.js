import React, { useState, useRef, useEffect, Fragment } from 'react';
import * as d3 from 'd3';
import { user_average_session } from '../../mock_data/data';
import styled from 'styled-components';

const Container = styled.div`
width:90%;
display:flex;
`

export default function BarChart(props) {
    const {width, height} = props;
    const info = user_average_session[0].sessions;
    const [data, setData] = useState(info);
    const svgRef = useRef();
    
    useEffect(() => {
        const margin = { top:10, right:50, bottom: 50, left: 50};
        //set up container
        const svg = d3.select(svgRef.current)
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .style('overflow', 'visible')
            .style('margin-top', '100px');

        //set up scaling
        const xscale = d3.scaleLinear().domain([0, 100]).range([0, width]);
        const yscale = d3.scaleLinear().domain([0, 100]).range([height , 0]);
        
        //set up axis
        const xAxis = d3.axisBottom(xscale).ticks(data.length);
        const yAxis = d3.axisLeft(yscale).ticks(10);
        svg.append('g').call(xAxis).attr('transform', `translate(0,${height})`);
        svg.append('g').call(yAxis);
        
        //set up axis labeling
        svg.append('text')
            .attr('x', 0)
            .attr('y', -50)
            .style('font-weight', 'light')
            .style('font-size', '12px');
       /* svg.append('text')
            .attr('y', height / 2)
            .attr('x', -50)
            .text('the y');*/
        
            //set up svg data
        svg.selectAll()
            .data(data)
            .enter()
            .append('circle')
            .attr('cx', (d) => xscale(d[0]))
            .attr('cy', (d) => yscale(d[1]))
            .attr('r', 2);
    }, [data,setData]);

    return (
        <Fragment>
        <Container>
            <svg key={`LineChart`} ref={svgRef}></svg>
        </Container>
        </Fragment>
    );
}
