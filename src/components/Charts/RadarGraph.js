import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'
import colors from '../../style/colors';
import './charts.css';

/**
 * Creation of the Radar Chart from the Recharts charting Lib
 * @param {string} width
 * @param {string} height
 * @param {array} data 
 * @returns {JSX.Element} radar chart component
 */


export default function RadarGraph(props){
    const { width, height, data} = props;
  
    function fixData(firstElement, secondElement){
      let newArray = [];
      firstElement.map( (d, i) => { 
        newArray.push({value: d.value, kind:secondElement[i + 1]})
      })
      return newArray
    }

    //mock_data formating
    // const info = fixData(data[0].data, data[0].kind);
    //API data
    const info = fixData(data.data, data.kind);
  
    return (
        <ResponsiveContainer width={width} height={height}>
          <RadarChart cx="50%" cy="50%" outerRadius="65%" data={info}>
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" stroke={"white"} tickLine={false}/>
            <Radar name="Performance" dataKey="value" fill={colors.chartRed} fillOpacity={0.8} />
          </RadarChart>
        </ResponsiveContainer>
    );
  }

RadarGraph.propTypes = {
  data :PropTypes.array.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
}
