import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import BackButton from './BackButton';

export default class SingleMatch extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <React.Fragment>
                {/* <BackButton
                        switchViewComponent={this.props.switchViewComponent}
                        display={this.props.display}
                    /> */}
                <Div>
                    {this.props.singleMatch.homeTeam.name}{" "}
                    {"("}{this.props.singleMatch.score.halfTime.homeTeam}{") "}
                    {this.props.singleMatch.score.fullTime.homeTeam}
                    <br></br>
                    {this.props.singleMatch.awayTeam.name}{" "}
                    {"("}{this.props.singleMatch.score.halfTime.awayTeam}{") "}
                    {this.props.singleMatch.score.fullTime.awayTeam}
                </Div>
            </React.Fragment>
        )
    }

}

const Div = styled.div`
    color: black;
    &:hover{
        color: blue
    }
    // padding-top: 2px;
    // padding-bottom: 8px;
    // padding-left: 45px;
    width: 600px;
    height: 100px;
    position: absolute;
    left: 50%;
    top: 35%; 
    margin-left: -300px;
    margin-top: -50px;
    border: 1px solid black;
    text-align: center;
    font-size: 2em;
    `