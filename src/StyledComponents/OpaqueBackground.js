import styled, { css } from 'styled-components';

// use rgba so child elements don't inerit opacity settings
const OpaqueBackground = styled.div`
    background-color: rgba(255,255,255,0.65);
    height: 100vh;
    top: 15vh;
    width: 75%;
    float: none;
    margin: 0 auto;
    overflow: scroll;
    position: relative;
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
`
export default OpaqueBackground;