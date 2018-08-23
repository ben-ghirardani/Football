import React, { Component } from 'react';
import styled, { css } from 'styled-components';

class Table_Entry extends Component {

    // If you don’t initialize state and you don’t bind methods, 
    // you don’t need to implement a constructor for your React component.  

    render() {
        return(
            <Tr {...this.props}>
                <td>{this.props.position}</td>
                <td>{this.props.team}</td>
                <td>{this.props.played}</td>
                <td>{this.props.won}</td>
                <td>{this.props.drawn}</td>
                <td>{this.props.lost}</td>
                <td>{this.props.gf}</td>
                <td>{this.props.ga}</td>
                <td>{this.props.gd}</td>
                <td>{this.props.points}</td>
            </Tr>
        )
    }

}

export default Table_Entry;

const Tr = styled.tr`
    border-top: ${props => {
        if(props.position === 18) {
            return '1px red dotted'
        }
    }}
`