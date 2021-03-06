import styled, { css } from 'styled-components';
import FootballBackground2 from '../img/FootballBackground2.png';

const BackgroundDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url(${FootballBackground2});
    background-repeat: no-repeat;
    background-position: center center;
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