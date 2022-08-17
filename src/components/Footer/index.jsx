import React from 'react';
import styled from 'styled-components';
import colors from '../../style/colors';
import SportCard from '../SportCard';
import { footerIcons } from '../../assets/icons';

const FootCont = styled.footer`
    position: absolute;
    top: 90px;
    background-color: ${colors.backF};
    height: 780px;
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.backF};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding-top: 150%;
`;

const CopyrightCont = styled.div`
    height: 150px;
`;
const Copyright = styled.p`
    transform: rotate(-90deg);
    color: white;
    margin-top: 40%;
    font-size: 12px;
`;

export default function Footer() {
    return (
        <FootCont>
            <Container>
                {footerIcons.map((icons, index) => (
                    <SportCard
                        key={`${index}-nutricard`}
                        index={index}
                        icon={icons}
                    />
                ))}
            </Container>
            <CopyrightCont>
                <Copyright>Copyright,SportSee2020</Copyright>
            </CopyrightCont>
        </FootCont>
    );
}
