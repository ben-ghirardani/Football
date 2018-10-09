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
        // this.props.fetchSingleMatch(ID)
        this.props.sendReturnedMatchToState(match)
        this.props.switchViewComponent("match")
    }

    render() {
        return(
            <div
                onClick={this.onClickMatch}
            >
                {this.props.homeTeam}
                {this.props.awayTeam}
                {this.props.matchDay}
            </div>
        )
    }

}

export default Match;