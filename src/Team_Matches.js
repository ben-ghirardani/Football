import React, {Component} from 'react';
import styled, { css } from 'styled-components';
import Match from './Match';

class Team_Matches extends Component {

    // does this component still need a constructor?
    constructor(props) {
        super(props);
        this.onClickMatch = this.onClickMatch.bind(this);
    }

    onClickMatch() {
        console.log("you clicked on a match!")
    }

    render() {
        return(
            <div>
                <h1>{this.props.teamSelected}</h1>
                <div> 
                    {
                        this.props.teamSeasonGames.map((item, i) =>
                            <Match
                                onClickMatch={this.onClickMatch}
                                key={i}
                                homeTeam={item.homeTeam.name}
                                awayTeam={item.awayTeam.name}
                                matchDay={item.matchday}
                                score={item.score}
                            />    
                        )
                    }                    
                </div>
            </div>
        )
    }

}

export default Team_Matches;