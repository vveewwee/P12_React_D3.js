/***
 * Globaly applied css style
 *
 */

import React from 'react';
import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`
    * {
    font-family: 'Roboto', Helvetica, sans-serif;
    }
    body {
        margin: 0; 
    }
`;

export default function GlobalStyle() {
    return <StyledGlobalStyle />;
}
