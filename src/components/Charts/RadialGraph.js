import React, { Fragment } from 'react'
import colors from '../../style/colors';
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis, Legend } from 'recharts';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './charts.css';

/**
 * Creation of the Radial / donut Chart from the Recharts Lib
 * @param {string} width
 * @param {string} height
 * @param {array} data 
 * @returns {JSX.Element}
 */

const Container = styled.div`
position:absolute;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const Title = styled.p`
font-size:24px;
margin:0;
`
const TitleSmall = styled.p`
font-size:10px;
margin-top:2px;
opacity:0.4;
`
export default function RadialGraph(props) {
    const {width, height, data} = props;
    let info = [{value: data}];
    let percentage = data * 100 + "%";

    const customLabel = ()=>{
      return <text fontSize="14px" x={10} y={20}> score</text>
    }

    return (
      <Fragment>
        <Container>
          <Title>{percentage}</Title>
          <TitleSmall> of your daily goal</TitleSmall>
        </Container>
        <ResponsiveContainer width={width} height={height}>
          <RadialBarChart innerRadius="80%" barSize={7} data={info} startAngle={90} endAngle={450}>
          <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
            <RadialBar
              minAngle={15}
              background
              clockWise
              dataKey="value"
              fill={colors.chartRed}
              cornerRadius={5}
              label={customLabel}
            />
          </RadialBarChart>
        </ResponsiveContainer>
        </Fragment>
      );
}

RadialGraph.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    data: PropTypes.number
}