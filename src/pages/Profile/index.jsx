import React, { Fragment } from 'react';
import Dashboard from '../../components/Dashboard';
import styled from 'styled-components';

const Wrapper = styled.main`
    width: 100%;
`;

export default function Profile({userData}) {

    return (
        <Fragment>
            <Wrapper>
                <Dashboard userData={ userData }/>
            </Wrapper>
        </Fragment>
    );
}
