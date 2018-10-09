import React, { Component } from 'react';
import styled, { css } from 'styled-components';

class BackButton extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        console.log("I was clicked")
        if(this.props.teamSelected) {
            this.props.switchViewComponent("table")
        } else if (this.props.match) {
            this.props.switchViewComponent("teamSelected")
        }
        else return
    }

    render() {
        return(
            <button onClick={this.onClick}>
                Back
            </button>
        )
    }

}

export default BackButton;