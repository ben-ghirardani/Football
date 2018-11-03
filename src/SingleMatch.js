import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import BackButton from './BackButton';

class SingleMatch extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <BackButton
                    switchViewComponent={this.props.switchViewComponent}
                    display={this.props.display}
                />
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