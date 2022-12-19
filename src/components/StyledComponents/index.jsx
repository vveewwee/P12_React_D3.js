import colors from '../../style/colors';
import styled from 'styled-components';

/**
 * Styled components used for the Dashboard component
 */

export const Container = styled.div`
    width: 80%;
    position: absolute;
    left: 110px;
    display: flex;
    flex-direction: column;
    padding: 2%;
`;

export const HeaderTitle = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Greeting = styled.div`
    display: flex;
    flex-flow: row nowrap;
`;

export const MotivationText = styled.p`
    font-weight: 400;
    font-size: 18px;
    margin-top: 0;
`;

export const UserContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const CardHolder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: inherit;
    align-items: center;
    width: 30%;
`;

export const GraphContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
`;

export const MainChartContainer = styled.div`
    width: 100%;
    margin-bottom: 2%;
`;

export const MiniChartContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 200px;
`;

export const RadarChartContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: space-between;
    height: 200px;
    width: 30%;
    background-color: ${colors.chartBlack};
    border-radius: 5px;
`;

export const RadialChartContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    height: 200px;
    width: 30%;
    background-color: ${colors.cardC};
    border-radius: 5px;
`;

export const LineChartContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: space-between;
    height: 200px;
    width: 30%;
    background-color: ${colors.chartRed};
    border-radius: 5px;
`;

export const ChartContainer = styled.div`
    background-color: ${colors.cardC};
    border-radius: 6px;
    width: 100%;
`;
