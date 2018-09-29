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
                    {/* use the output of combineHomeAndAway to populate a new component that is a series of games/results */}
                    {
                        this.props.combineHomeAndAway(this.props.teamName, this.props.matches)
                    }
                </p>
                <Match/>
            </div>
        )
    }

}

export default Team_Matches;