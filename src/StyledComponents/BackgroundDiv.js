import styled, { css } from 'styled-components';
import FootballBackground2 from '../img/FootballBackground2.png';

// remove photo background as it distracts from foreground?
// Or doctor the image to give it a much more opaque display?

const BackgroundDiv = styled.div`
    background-image: url(${FootballBackground2});
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