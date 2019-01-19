import React, { Component } from 'react';
import HeaderBackGround from './StyledComponents/HeaderBackground';
import Logo from './StyledComponents/Logo';
import OpaqueHeader from './StyledComponents/OpaqueHeader';

export default class AppHeader extends Component {

    render() {
        return(
            // <HeaderBackGround>
                <OpaqueHeader>
                    <Logo/>
                </OpaqueHeader>
            // </HeaderBackGround>
        )
    }

}

// no longer using this, leave it for now in case it goes back in.