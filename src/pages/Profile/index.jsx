import React, { Fragment } from 'react';
import Dashboard from '../../components/Dashboard';
import styled from 'styled-components';

const Wrapper = styled.main`
    width: 100%;
`;

export default function Profile() {
    return (
        <Fragment>
            <Wrapper>
                <Dashboard />
            </Wrapper>
        </Fragment>
    );
}
