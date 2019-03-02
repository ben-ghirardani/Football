import React, {Component} from 'react';
import Match from './Match';
import BackButton from './BackButton';
import styled, { css } from 'styled-components';

export default class TeamMatches extends Component {

    render() {
        return(
            <Div>
                <div> 
                    {
                        this.props.teamSeasonGames.map((game, i) =>
                            <Match
                                id={game.id}
                                key={i}
                                game={game}
                                homeTeam={game.homeTeam.name}
                                awayTeam={game.awayTeam.name}
                                matchDay={game.matchday}
                                score={game.score}

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

const Div = styled.div`
    position: relative;
    width: 50%;
    margin-left: auto;
    margin-right: 0;
    padding-top: 2%;
`