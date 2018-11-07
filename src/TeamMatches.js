import React, {Component} from 'react';
import Match from './Match';
import BackButton from './BackButton';
import styled, { css } from 'styled-components';

class TeamMatches extends Component {

    render() {
        return(
            <Div>
                <h1>{this.props.teamSelected}</h1>
                <BackButton
                    teamSelected={this.props.teamSelected}
                    // won't use match in this instance?
                    display={this.props.display}
                    switchViewComponent={this.props.switchViewComponent}
                />
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
                                switchViewComponent={this.props.switchViewComponent}
                                getMatchID={this.props.getMatchID}
                                useMatchIDToFilterGame={this.props.useMatchIDToFilterGame}
                                sendReturnedMatchToState={this.props.sendReturnedMatchToState}
                                singleMatch={this.props.singleMatch}
                            />    
                        )
                    }                    
                </div>
            </Div>
        )
    }

}

export default TeamMatches;

const Div = styled.div`
    // position was causing the top of this component to get cut off at the top of the screen.
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
`