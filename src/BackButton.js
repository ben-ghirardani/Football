import React, { Component } from 'react';
import Button from './StyledComponents/Button';

export default class BackButton extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        if(this.props.display === "teamSelected") {
            this.props.switchViewComponent("table")
        } else if (this.props.display === "match") {
            this.props.switchViewComponent("teamSelected")
        }
        else return
    }

    render() {
        return(
            <Button onClick={this.onClick}>
                Back
            </Button>
        )
    }

}

// do styling!