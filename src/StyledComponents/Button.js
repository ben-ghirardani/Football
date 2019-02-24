import styled, { css } from 'styled-components';

const Button = styled.button`
    position: fixed;
    border: 1px solid black;
    // edit size
    left: 50%;
    transform: translateX(-50%);
    // z-index = stack order, higher number is 'in front'. 1 is higher than default so button appears highest.
    z-index: 1;
`

export default Button;