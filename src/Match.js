import React, { Component } from 'react';
import styled, { css } from 'styled-components';

class Match extends Component {

    render() {
        return(
            <div>
                {this.props.homeTeam}
                {this.props.awayTeam}
                {this.props.matchDay}
            </div>
        )
    }

}

export default Match;