import React, {Component} from 'react';
import styled, { css } from 'styled-components';
import Match from './Match';

class Team_Matches extends Component {

    constructor(props) {
        super(props);
        this.getTeamMatches = this.getTeamMatches.bind(this);
    }

        // does not work, find a way to loop through matches, finding any that matches the selected team name,
        // and mapping the details from that match to the <Match/> component.

    // getMatches() {
    //     let matches = this.props.matches.matches;
    //     for (let i = 0; i < matches.length; i++) {
    //         const match = matches[i];
    //         if(match.homeTeam || match.awayTeam === this.props.teamName) {
                
    //         }
    //         return theMatch
    //     }
    // }

    getTeamMatches(matches) {
        for (let i = 0; i < matches.length; i++ ) {
            let match = matches[i]
            if(match.homeTeam || match.awayTeam === this.props.teamName) {
                console.log(match.id)
                // games.push(match.id)
                
            }
        }
    }

    render() {
        let matchPropData = this.props.matches.matches;
        return(
            <div>
                <h1>{this.props.teamName}</h1>
                <p> {console.log(matchPropData)} </p>
                <Match/>
            </div>
        )
    }

}

export default Team_Matches;