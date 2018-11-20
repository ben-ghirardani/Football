import styled, { css } from 'styled-components';
import FootballBackground2 from '../img/FootballBackground2.png';

const HeaderBackground = styled.div`
    background-image: url(${FootballBackground2});
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    top: 0;
    width: inherit;
    height: 15%;
`

export default HeaderBackground;