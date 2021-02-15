import React, {Component} from 'react';

export default class DigitalClicker extends Component {

    constructor(props) {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {
        // const count = this.state.timesClicked + 1
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }


    render () {
        return <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    }
}