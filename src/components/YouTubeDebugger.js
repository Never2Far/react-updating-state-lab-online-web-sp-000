import React, {Component} from 'react';

export default class YouTubeDebugger extends Component {

constructor(props) {

    super()
    this.state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }
}

handleClickBitrate = () => {
this.setState({
    settings: {
        ...this.state.settings,
        bitrate: 12
    }
})
}

handleClickResolution = () => {
    this.setState({
        settings: {
            ...this.state.settings,
            video: {
                resolution: '720p'
            }
        }
    })
}


render () {
    return (
        <React.Fragment>
            <button className='bitrate' onClick={this.handleClickBitrate}>Change bitrate</button>
            <button className='resolution' onClick={this.handleClickResolution}>Change Resolution</button>
        </React.Fragment>)
}

}