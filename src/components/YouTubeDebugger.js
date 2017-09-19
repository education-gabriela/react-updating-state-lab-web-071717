import React from "react";

class YouTubeDebugger extends React.Component {
  constructor() {
    super();
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

  setBitrate = (event) => {
    const newState = Object.assign({}, this.state);
    newState.settings.bitrate = 12;
    this.setState(newState);
  }

  setResolution = (event) => {
    const newState = Object.assign({}, this.state);
    newState.settings.video.resolution = "720p";
    this.setState(newState);
  }

  render() {
    return(
      <div>
        <button className="bitrate" onClick={this.setBitrate}>Set bitrate to 12 ({this.state.settings.bitrate} currently)</button>
        <button className="resolution" onClick={this.setResolution}>Set Resolution to 720p ({this.state.settings.video.resolution} currently)</button>
      </div>
    );
  }
}

export default YouTubeDebugger;
