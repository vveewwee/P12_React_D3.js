/**
 * Nutricard component takes as property the nutricon array
 * that contains all the info ness for displaying the nutriments
 * combined with the Users personnal info.
 * Its composed by an icon,
 * a short paragraph and the personnal element info.
 *
 * @params nutricon array
 * @return jsx element, the nutricard components
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react';
import styled from 'styled-components';
import colors from '../../style/colors';
import { user_main_data } from '../../mock_data/data';

const Container = styled.div`
    border-radius: 15px;
    background-color: ${colors.cardC};
    width: 150px;
    height: 70px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 5px;
    margin-bottom: 20px;
`;
const IconCont = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NutriCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: ${colors.backF};
    font-size: 12px;
    padding-left: 10px;
    width: 60px;
`;

const BoldText = styled.p`
    margin: 2px;
    font-size: 12px;
    font-weight: 400;
`;

const LightText = styled.p`
    margin: 2px;
    font-size: 8px;
    font-weight: 200;
`;

export default function NutriCard(nutricon) {
    const backCol = `${nutricon.nutricon.background}`;
    const col = `${nutricon.nutricon.color}`;
    return (
        <Fragment>
            <Container>
                <IconCont style={{ backgroundColor: backCol, color: col }}>
                    <FontAwesomeIcon
                        key={`nutricon-${nutricon.index}-${nutricon.nutricon.color}`}
                        icon={nutricon.nutricon.icon}
                    />
                </IconCont>
                <NutriCont>
                    <BoldText>
                        {user_main_data[0].keyData[nutricon.nutricon.keyData]}
                        {nutricon.nutricon.unit}
                    </BoldText>
                    <LightText>{nutricon.nutricon.val}</LightText>
                </NutriCont>
            </Container>
        </Fragment>
    );
}
