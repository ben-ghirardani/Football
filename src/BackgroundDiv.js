import styled, { css } from 'styled-components';
import FootballBackground from './img/FootballBackground.png';

const BackgroundDiv = styled.div`
    background-image: url(${FootballBackground});
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100%;
    min-width: 100%;
    height: auto;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
`
export default BackgroundDiv;