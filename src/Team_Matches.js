import React, {Component} from 'react';
import styled, { css } from 'styled-components';
import Match from './Match';

class Team_Matches extends Component {

    // does this component still need a constructor?
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div>
                <h1>{this.props.teamName}</h1>
                <p> 
                    {/* 
                        map through this.props.teamSeasonGames and create a series of 
                        Match components (similar to Table_Entry in App) that populate with 
                        details of each individual game
                    */}
                </p>
                <Match/>
            </div>
        )
    }

}

export default Team_Matches;