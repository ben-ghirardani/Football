import React, { Component } from 'react';

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

    render () {
        return(
            <img src={
                selectIMG(this.props.team)
            } />
        )
    }

} 