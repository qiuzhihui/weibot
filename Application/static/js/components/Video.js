import React from 'react'
import {ResponsiveEmbed} from 'react-bootstrap';
import VideoOverlay from './VideoOverlay'

const VideoContainer = {
  position: 'relative',
  height: '70vh',
  overflow: 'hidden'
}

const video = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: 'auto',
    zIndex: '-100',
    transform: 'translateX(-50%) translateY(-50%)'
}


class Video extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <VideoOverlay mainPageRefs={this.props.mainPageRefs} />
        <div style={VideoContainer}>
            <video autoPlay loop id="video-background" muted playsInline style={video}>
              <source src="https://s7d9.scene7.com/e2/Audiusastaging/Videos/Models/MLP-2018/Q5/2018-Audi-Q5-hero.mp4" type="video/mp4" />
            </video>
        </div>
      </div>
    )
  }
}

export default Video