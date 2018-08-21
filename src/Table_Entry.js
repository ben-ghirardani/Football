import React, { Component } from 'react';
// import Tr from './Table_Row';
import styled, { css } from 'styled-components';

class Table_Entry extends Component {

    // If you don’t initialize state and you don’t bind methods, 
    // you don’t need to implement a constructor for your React component.  

    render() {
        // console.log(this.props.position)
        const { position } = this.props
        console.log(position)
        return(
            <Tr>
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
    border-top: ${}
`

// const Tr = styled.tr`
//     border-top: ${(position) =>
//         position === "18" ?
//             "1px dotted red" : null
//     }
// `

// const Tr = styled.tr`
//     ${props => props.key === '18' && css`
//         border-top: 1px dotted red
//     `}
// `

// border-top: ${this.props.position ? '1px dotted red' : 'none'}
// ${key==='18' ? '1px dotted red' : 'none'}

