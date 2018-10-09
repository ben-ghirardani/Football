import React, { Component } from 'react';
import styled, { css } from 'styled-components';

class SingleMatch extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                {this.props.singleMatch.homeTeam.name}{" "}
                {"("}{this.props.singleMatch.score.halfTime.homeTeam}{") "}
                {this.props.singleMatch.score.fullTime.homeTeam}
                <br></br>
                {this.props.singleMatch.awayTeam.name}{" "}
                {"("}{this.props.singleMatch.score.halfTime.awayTeam}{") "}
                {this.props.singleMatch.score.fullTime.awayTeam}
            </div>
        )
    }

}

export default SingleMatch;