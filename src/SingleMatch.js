import React, { Component } from 'react';
import styled, { css } from 'styled-components';

class SingleMatch extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                Oh hi! I'm a sinlge match!
                {console.log(this.props.singleMatch)}
            </div>
        )
    }

}

export default SingleMatch;