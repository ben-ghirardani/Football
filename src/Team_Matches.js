import React, {Component} from 'react';
import styled, { css } from 'styled-components';
import Match from './Match';

class Team_Matches extends Component {

    constructor(props) {
        super(props);
        this.getMatches = this.getMatches.bind(this);
    }

        // map through the array of matches here, pull out the ones that match teamSelected
        // and pass each one as props to <Match/>, then call this function in 'render', which will create
        // a series of <Match/> components.
    getMatches() {
        let matches = this.props.matches;
        let justMatches = matches.matches;

    }

    render() {
        return(
            <div>
                <h1>{this.props.teamName}</h1>
                {this.getMatches()}
                <Match/>
            </div>
        )
    }

}

export default Team_Matches;