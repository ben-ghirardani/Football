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

        // does not work, find a way to loop through matches, finding any that matches the selected team name,
        // and mapping the details from that match to the <Match/> component.
    getMatches() {
        let matches = this.props.matches.matches;
        for (let i = 0; i < matches.length; i++) {
            const match = matches[i];
            if(match.homeTeam || match.awayTeam === this.props.teamName) {
                
            }
            return theMatch
        }
    }

    render() {
        return(
            <div>
                <h1>{this.props.teamName}</h1>
                <Match/>
            </div>
        )
    }

}

export default Team_Matches;