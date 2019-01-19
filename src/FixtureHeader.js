import React, { Component } from 'react';

export default class FixtureHeader extends Component {

    // edit for the fixtures


    // OR ... just make this out of a collection of divs, etc?

    render() {
        return(
            <tr>
                <th></th>
                <th>Team</th>
                <th>MP</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>GF</th>
                <th>GA</th>
                <th>GD</th>
                <th>Pts</th>
            </tr>
        )
    }
 
}