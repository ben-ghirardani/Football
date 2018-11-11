import styled, { css } from 'styled-components';
import Logo from '../img/Logo.png';

const BackgroundDiv = styled.div`
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 17%;
    min-width: 40%;
    // height: auto;
    // width: 100%;
    position: fixed;
    // top: 0;
    // left: 0;
`
export default BackgroundDiv;