import React from 'react';
import styled from 'styled-components';
import colors from '../../style/colors';
import logo from '../../assets/logo.png';

const Container = styled.header`
    display: flex;
    flex-direction: row;
    background-color: ${colors.backF};
    color: white;
    height: 90px;
`;

const LogoHolder = styled.div`
    width: 180px;
    height: 60px;
    object-fit: cover;
    margin: 1%;
    margin-right: 40px;
    padding-left: 20px;
`;

const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    margin-left: 5%;
    margin-right: 5%;
`;

const Nav = styled.a`
    text-decoration: none;
    color: white;
`;

const Img = styled.img`
    width: 100%;
    height: auto;
`;
export default function Header() {
    return (
        <Container>
            <LogoHolder>
                <Img src={logo} alt={`logo-SportSee`} />
            </LogoHolder>
            <NavContainer>
                <Nav>Accueil</Nav>
                <Nav>Profil</Nav>
                <Nav>Réglages</Nav>
                <Nav>Communauté</Nav>
            </NavContainer>
        </Container>
    );
}
