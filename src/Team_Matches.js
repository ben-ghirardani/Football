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
                <h1>{this.props.teamSelected}</h1>
                <div> 
                    {
                        this.props.teamSeasonGames.map((item, i) =>
                            <Match
                                id={item.id}
                                key={i}
                                homeTeam={item.homeTeam.name}
                                awayTeam={item.awayTeam.name}
                                matchDay={item.matchday}
                                score={item.score}
                                fetchSingleMatch={this.props.fetchSingleMatch}
                                switchViewComponent={this.props.switchViewComponent}
                                getMatchID={this.props.getMatchID}
                                useMatchIDToFilterGame={this.props.useMatchIDToFilterGame}
                                sendReturnedMatchToState={this.props.sendReturnedMatchToState}
                                singleMatch={this.props.singleMatch}
                            />    
                        )
                    }                    
                </div>
            </div>
        )
    }

}

export default Team_Matches;