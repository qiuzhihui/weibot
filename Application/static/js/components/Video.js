import React from 'react'
import {ResponsiveEmbed} from 'react-bootstrap';
import VideoOverlay from './VideoOverlay'

const Video = () => (
  <div>
    <VideoOverlay />
    <div style={{'objectFit': 'cover', 'position': 'relative'}}>
      <ResponsiveEmbed a16by9>
        <video autoPlay loop id="video-background" muted playsInline style={{'background':'linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)', 'boxShadow':'inset 0 0 50 50 rgba(0,0,0,0.9)'}}>
          <source src="https://s7d9.scene7.com/e2/Audiusastaging/Videos/Models/MLP-2018/Q5/2018-Audi-Q5-hero.mp4" type="video/mp4" />
        </video>
      </ResponsiveEmbed>
      <div style={{'position':'absolute', 'top':'0', 'left':'0', 'bottom':'0', 'right':'0', 'display':'block', 'background':'rgba(0,0,0,0.3)'}}></div>
    </div>
  </div>
)

export default Video