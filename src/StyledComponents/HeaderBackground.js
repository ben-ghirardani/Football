import styled, { css } from 'styled-components';
import FootballBackground2 from '../img/FootballBackground2.png';

const HeaderBackground = styled.div`
    background-image: url(${FootballBackground2});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: fixed;
    top: 0;
    width: inherit;
    height: 15%;
`

export default HeaderBackground;

// no longer using this. Leave it for now in case it ends up going back in