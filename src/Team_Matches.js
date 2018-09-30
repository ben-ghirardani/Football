import React, {Component} from 'react';
import styled, { css } from 'styled-components';
import Match from './Match';

class Team_Matches extends Component {

    // does this component still need a constructor?
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div>
                <h1>{this.props.teamName}</h1>
                <p> 
            
                </p>
                <Match/>
            </div>
        )
    }

}

export default Team_Matches;