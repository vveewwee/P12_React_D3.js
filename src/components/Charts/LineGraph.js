import React, { Fragment } from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../style/colors';
import './charts.css'

const Title = styled.p`
opacity: 0.3;
color: ${colors.chartBlack};
font-size:12px;
position:absolute;
padding-left:10px;
`
/**
 * @description Creation of the Line chart
 * 
 * @param {string} props.height
 * @param {string} props.width 
 * @param {array} props.data
 * @returns {JSX.element}
 * 
 */

export default function LineGraph(props) {
    const {width, height, data} = props;
    
    function fixData(array){
        let newData = [];
        let days = ['M','T','W','T','F','S','S'];
        array.forEach((d,i) => {
            newData.push({day: days[i], time: d.sessionLength});
        }
        )
        return newData;
    };

    // const info = fixData(data[0].sessions);
    const info = fixData(data);

    var tooltip;
    const CustomTooltip = ({ active, payload }) => {
    if (active || tooltip)
        for (const bar of payload)
            if (bar.dataKey === tooltip)
             return <div className="customTooltipDiv" style={{backgroundColor:"white", color:"black", padding:"5px"}}>{ bar.value } min</div>
    return null
}
    return (
        <Fragment>
        <Title> time average of sessions</Title>
        <ResponsiveContainer width={width} height={height}>
          <LineChart
            width={width}
            height={height}
            data={info}
            margin={{
                left:10,
                right:10,
                top:50
            }
            }
          >
            <XAxis dataKey="day" stroke="white" axisLine={false} tickLine={false} opacity={0.5}/>
            <Tooltip content={CustomTooltip} dataKey="time" cursor={{strokeWidth:20, strokeOpacity:0.9, stroke:"red", fill:'rgba(255, 255, 255, 0.95)'}}/>
            <Line type="monotone" dataKey="time" strokeOpacity={0.5} stroke="white" strokeWidth={2} dot={false}  onMouseOver={ () => tooltip="time"}/>
          </LineChart>
        </ResponsiveContainer>
        </Fragment>
      );
}

LineGraph.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    data: PropTypes.array
}
