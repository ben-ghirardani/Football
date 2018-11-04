import styled, { css } from 'styled-components';

// use rgba so child elements don't inerit opacity settings
const OpaqueBackground = styled.div`
    background-color: rgba(255,255,255,0.40);
    height: 100%;
    width: 75%;
    float: none;
    margin: 0 auto;
`
export default OpaqueBackground;