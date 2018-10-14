import styled, { css } from 'styled-components';

// use rgba so child elements don't inerit opacity settings
const OpaqueBackground = styled.div`
    background-color: rgba(255,255,255,0.25);
    height: 550px;
    width: 770px;
    position: absolute;
    left: 50%;
    top: 50%; 
    margin-left: -375px;
    margin-top: -275px;
    border-radius: 25px;
`
export default OpaqueBackground;