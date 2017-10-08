import React from 'react'
import {ResponsiveEmbed} from 'react-bootstrap';

const Video = () => (
  <div style={{'objectFit': 'cover', 'position': 'relative'}}>
    <div style={{'position': 'absolute', 'top': '10%', 'left': '5%', 'zIndex': 1, 'backgroundColor':'rgba(255,255,255,0.7)', 'padding':'20px'}}>
        <h4>Singular vehicle maintenance/repair experience: </h4>
        <h5><li>Industry expertise</li></h5>
        <h5><li>Advanced equipment</li></h5>
        <h5><li>Ownership attitude</li></h5>
        <h5><li>Competitive pricing</li></h5>
        <form>
            <p>Contact us:</p>
            <button type="submit">Address</button>
            <button type="submit">Contact</button>
        </form>
    </div>
    <ResponsiveEmbed a16by9>
      <video autoPlay loop id="video-background" muted playsInline style={{'background':'linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)', 'boxShadow':'inset 0 0 50 50 rgba(0,0,0,0.9)'}}>
        <source src="https://s7d9.scene7.com/e2/Audiusastaging/Videos/Models/MLP-2018/Q5/2018-Audi-Q5-hero.mp4" type="video/mp4" />
      </video>
    </ResponsiveEmbed>
    <div style={{'position':'absolute', 'top':'0', 'left':'0', 'bottom':'0', 'right':'0', 'display':'block', 'background':'rgba(0,0,0,0.3)'}}></div>
  </div>
)

export default Video