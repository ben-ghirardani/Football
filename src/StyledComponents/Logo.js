import styled, { css } from 'styled-components';
import Logo from '../img/Logo.png';

const BackgroundDiv = styled.div`
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 14%;
    min-width: 40%;
    position: fixed;
`
export default BackgroundDiv;