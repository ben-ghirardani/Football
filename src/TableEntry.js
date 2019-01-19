import React, { Component } from 'react';
import styled, { css } from 'styled-components';

export default class TableEntry extends Component {

    // If you don’t initialize state and you don’t bind methods, 
    // you don’t need to implement a constructor for your React component. 

    constructor(props) {
        super(props);
        this.onClickTableRow = this.onClickTableRow.bind(this);
    }

    onClickTableRow() {
        let team = this.props.team;
        this.props.getTeamNameFromTableRow(team);
        this.props.setTeamSeasonGames(this.props.combineHomeAndAway(team, this.props.matches.matches))
    }

    render() {
        return(
            <Tr {...this.props}
                onClick={this.onClickTableRow}
            >
                <TdLeft>{this.props.position}</TdLeft>
                <Td>{this.props.team}</Td>
                <Td>{this.props.played}</Td>
                <Td>{this.props.won}</Td>
                <Td>{this.props.drawn}</Td>
                <Td>{this.props.lost}</Td>
                <Td>{this.props.gf}</Td>
                <Td>{this.props.ga}</Td>
                <Td>{this.props.gd}</Td>
                <TdRight>{this.props.points}</TdRight>
            </Tr>
        )
    }

}

// break these out into Styled Components folder

// border-radius doesn't apply on Tr
const Tr = styled.tr`
    &:hover {
        background-color: rgba(50,205,50,0.25);
    }
    border-top: ${props => {
        if(props.position === 18) {
            return '1px red dotted'
        }
    }}
`

// need a sperate Td for the two ends of the row, don't want rounder corners on every Td
const Td = styled.td`
    color: black;
`
const TdLeft = styled.td`
    color: black;
    border-top-left-radius: 9px;
    border-bottom-left-radius: 9px;
`

const TdRight = styled.td`
    color: black;
    border-top-right-radius: 9px;
    border-bottom-right-radius: 9px;
`