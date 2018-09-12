import React, { Component } from 'react';
import styled, { css } from 'styled-components';

class Match extends Component {

    render() {
        return(
            <div>
                {console.log("from <Match/> ", this.props.homeTeam)}
                <div>{this.props.homeTeam}</div>
            </div>
        )
    }

}

export default Match;

// {this.props.homeTeam}  
// {this.props.awayTeam}