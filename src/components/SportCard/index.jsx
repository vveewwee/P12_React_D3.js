import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import colors from '../../style/colors';

const Container = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 6px;
    background-color: ${colors.cardC};
    color: ${colors.primary};
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
`;

export default function SportCard(icons, index) {
    return (
        <Container>
            <FontAwesomeIcon key={`${index}-icon`} icon={icons.icon} />
        </Container>
    );
}
