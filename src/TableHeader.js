import React, { Component } from 'react';

class TableHeader extends Component {

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

export default TableHeader;