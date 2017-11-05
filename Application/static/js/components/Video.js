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
    top: 0,
    left: 0,
    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: 'auto',
    zIndex: '-100',
    // transform: 'translateX(-50%) translateY(-50%)',
    // height: '100%',
    // width: '100%',
    overflow: 'hidden',
}

// <video autoPlay loop id="video-background" muted playsInline style={video}>
//   <source src="https://s7d9.scene7.com/e2/Audiusastaging/Videos/Models/MLP-2018/Q5/2018-Audi-Q5-hero.mp4" type="video/mp4" />
// </video>
class Video extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <VideoOverlay />
        <div style={VideoContainer}>
            <iframe frameBorder="0" style={video}
              src="https://youtube.com/embed/z2zHhOTaWqA?rel=0&autoplay=1&controls=0&showinfo=0&autohide=1&disablekb=1&loop=1">
            </iframe>
        </div>
      </div>
    )
  }
}

export default Video