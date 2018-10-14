import styled, { css } from 'styled-components';

// use rgba so child elements don't inerit opacity settings
const OpaqueBackground = styled.div`
    background-color: rgba(0,0,0,0.3);
`
export default OpaqueBackground;