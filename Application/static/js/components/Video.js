import React from 'react'
import {ResponsiveEmbed} from 'react-bootstrap';

const Video = () => (
  <div style={{'objectFit': 'cover', 'position': 'relative' }}>
    <div style={{'position': 'absolute', 'top': '5%', 'left': '5%', 'zIndex': 1}}>
        <p>2018 Q5</p>
        <form>
            <p>Contact up in blow</p>
            <button type="submit">Address</button>
            <button type="submit">Contact</button>
        </form>
    </div>
    <ResponsiveEmbed a16by9>
      <video autoPlay loop id="video-background" muted playsInline>
        <source src="https://s7d9.scene7.com/e2/Audiusastaging/Videos/Models/MLP-2018/Q5/2018-Audi-Q5-hero.mp4" type="video/mp4" />
      </video>
    </ResponsiveEmbed>
  </div>
)

export default Video