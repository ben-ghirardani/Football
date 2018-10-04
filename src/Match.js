import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { isDate } from 'util';

class Match extends Component {

    constructor(props) {
        super(props);
        this.onClickMatch = this.onClickMatch.bind(this);
    }

    // this is successfully pulling single match data
    onClickMatch() {
        console.log("you clicked on a match!")
        let ID = this.props.id
        let IDintoString = ID.toString()
        this.props.fetchSingleMatch(IDintoString)

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