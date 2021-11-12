import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
        -webkit-font-smoothing: antialiased !important;
    }
    body html #root {
        height: 100%;
    }
    h1, h2, h3, h4, h5, h6, p, a, input, button, select, option {
        color: #000;
        font-family: 'Staatliches', cursive;
    }
    button{
        :hover{
            cursor: pointer;
        }
    }
`;