import React, { Component } from 'react';
import styled, { css } from 'styled-components';
// do I need idDate?
import { isDate } from 'util';

class Match extends Component {

    constructor(props) {
        super(props);
        this.onClickMatch = this.onClickMatch.bind(this);
    }

    onClickMatch() {
        let ID = this.props.id
        this.props.getMatchID(ID)
        let match = this.props.useMatchIDToFilterGame(ID)
        this.props.sendReturnedMatchToState(match)
        this.props.switchViewComponent("match")
    }



    // make the display a table? Table header fixed position so it stays at the top?

    render() {
        return(
            <Div
                onClick={this.onClickMatch}
            >
                {this.props.game.matchday}
                {this.props.game.homeTeam.name+" "}
                {this.props.game.score.fullTime.homeTeam}
                {" - "}
                {this.props.game.score.fullTime.awayTeam}
                {" "+this.props.game.awayTeam.name}
            </Div>
        )
    }

}

export default Match;

const Div = styled.div`
    color: black;
    &:hover{
        color: blue
    }
    padding: 5px;
`