import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import convertDate from './ConvertDate'

export default class Match extends Component {

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

    render() {
        return(
            <Div
                onClick={this.onClickMatch}
            >
                {convertDate(this.props.game.utcDate)}
                <br></br>
                {this.props.game.homeTeam.name+" "}
                {this.props.game.score.fullTime.homeTeam}
                {" - "}
                {this.props.game.score.fullTime.awayTeam}
                {" "+this.props.game.awayTeam.name}
            </Div>
        )
    }

}

const Div = styled.div`
    color: black;
    &:hover{
        color: blue
    }
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 45px;
    `