import React, { Component } from 'react';
import styled, { css } from 'styled-components';

class TableEntry extends Component {

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
                <Td>{this.props.position}</Td>
                <Td>{this.props.team}</Td>
                <Td>{this.props.played}</Td>
                <Td>{this.props.won}</Td>
                <Td>{this.props.drawn}</Td>
                <Td>{this.props.lost}</Td>
                <Td>{this.props.gf}</Td>
                <Td>{this.props.ga}</Td>
                <Td>{this.props.gd}</Td>
                <Td>{this.props.points}</Td>
            </Tr>
        )
    }

}

export default TableEntry;

// break these out into Styled Components folder

const Tr = styled.tr`
    border-top: ${props => {
        if(props.position === 18) {
            return '1px red dotted'
        }
    }}
`

const Td = styled.td`
    color: black;
    &:hover{
        color: blue
    }
`