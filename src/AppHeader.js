import React, { Component } from 'react';
import HeaderBackGround from './StyledComponents/HeaderBackground';
import Logo from './StyledComponents/Logo';
import OpaqueHeader from './StyledComponents/OpaqueHeader';

class AppHeader extends Component {

    render() {
        return(
            <HeaderBackGround>
                <OpaqueHeader>
                    <Logo/>
                </OpaqueHeader>
            </HeaderBackGround>
        )
    }

}

export default AppHeader;