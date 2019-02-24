import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import Arsenal from './img/Crest/Arsenal.png';
import Bournemouth from './img/Crest/Bournemouth.png';
import Brighton from './img/Crest/Brighton.png';
import Burnley from './img/Crest/Burnley.png';
import Cardiff from './img/Crest/Cardiff.png';
import Chelsea from './img/Crest/Chelsea.png';
import CrystalPalace from './img/Crest/CrystalPalace.png';
import Everton from './img/Crest/Everton.png';
import Fulham from './img/Crest/Fulham.png';
import Huddersfield from './img/Crest/Huddersfield.png'
import Leicester from './img/Crest/Leicester.png';
import Liverpool from './img/Crest/Liverpool.png';
import ManchesterCity from './img/Crest/ManchesterCity.png';
import ManchesterUtd from './img/Crest/ManchesterUtd.png';
import Newcastle from './img/Crest/Newcastle.png';
import Southampton from './img/Crest/Southampton.png';
import Tottenham from './img/Crest/TottenhamHotspur.png';
import Watford from './img/Crest/Watford.png';
import WestHam from './img/Crest/WestHam.png';
import Wolverhampton from './img/Crest/Wolverhampton.png';
import ErrorIcon from './img/Crest/Error.png'

export default class TeamMatchesInfo extends Component {

    constructor(props) {
        super(props);
        this.selectIMG = this.selectIMG.bind(this);
        this.getTeamDetails = this.getTeamDetails.bind(this);
    }

    selectIMG(team) {
        if (team === "AFC Bournemouth") {
            return Bournemouth
        } else if (team === "Arsenal FC") {
            return Arsenal
        } else if (team === "Brighton & Hove Albion FC") {
            return Brighton
        } else if (team === "Burnley FC") {
            return Burnley
        } else if (team === "Cardiff City FC") {
            return Cardiff
        } else if (team === "Chelsea FC") {
            return Chelsea
        } else if (team === "Crystal Palace FC") {
            return CrystalPalace
        } else if (team === "Everton FC") {
            return Everton
        } else if (team === "Fulham FC") {
            return Fulham
        } else if (team === "Huddersfield Town AFC") {
            return Huddersfield
        } else if (team === "Leicester City FC") {
            return Leicester
        } else if (team === "Liverpool FC") {
            return Liverpool
        } else if (team === "Manchester City FC") {
            return ManchesterCity
        } else if (team === "Manchester United FC") {
            return ManchesterUtd
        } else if (team === "Newcastle United FC") {
            return Newcastle
        } else if (team === "Southampton FC") {
            return Southampton
        } else if (team === "Tottenham Hotspur FC") {
            return Tottenham
        } else if (team === "Watford FC") {
            return Watford
        } else if (team === "West Ham United FC") {
            return WestHam
        } else if (team === "Wolverhampton Wanderers FC") {
            return Wolverhampton
        } else ErrorIcon
    }

    getTeamDetails(teams) {
        let teamInfo = {
            venue: null,
            address: null,
            founded: null,
            website: null
        }
        for (let i = 0; i < teams.length; i++) {
            const teamName = this.props.team;
            const team = teams[i];   
            if (teamName === team.name) {
                teamInfo.venue = team.venue;
                teamInfo.address = team.address;
                teamInfo.founded = team.founded;
                teamInfo.website = team.website;
            }
        }
        return teamInfo;
    }

    render () {
        return(
            <Div>
                <Img src={
                    this.selectIMG(this.props.team)
                } />
                <H1>{this.props.team}</H1>
                <P> {this.getTeamDetails(this.props.allTeams).website} </P>
            </Div>
        )
    }

} 

// split the styled components out into their own files, make them as reusable as pos.
// any styling specific to this component can go here.

const Div = styled.div`
    width: 38%;
    margin-left: 0;
    float: left;
    position: fixed;
    padding-top: 8%;
`

const Img = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
    background-size: contain;
`

const H1 = styled.h1`
    text-align: center;
`

const P = styled.p`
    text-align: center;
`