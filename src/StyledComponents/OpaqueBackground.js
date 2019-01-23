import styled, { css } from 'styled-components';

// use rgba so child elements don't inerit opacity settings
const OpaqueBackground = styled.div`
    background-color: rgba(255,255,255,0.65);
    height: 100vh;
    width: 75%;
    float: none;
    margin: 0 auto;
    overflow: scroll;
    position: relative;
    border-top: 1px solid Black;
    border-left: 1px solid Black;
    border-right: 1px solid Black;
`
export default OpaqueBackground;

// change OpaqueBackground? It's just a container now. No overflow scroll. That would be on the child.