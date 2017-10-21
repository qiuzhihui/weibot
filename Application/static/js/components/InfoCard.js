import React from 'react'
import {ResponsiveEmbed, Button, ButtonToolbar} from 'react-bootstrap';
import InfoTabs from './InfoTabs' 

const InfoCard = () => (
  <div style={{'position': 'absolute', 'top': '10%', 'left': '5%', 'zIndex': 1, 'backgroundColor':'rgba(232,232,232,1)', 'padding':'20px'}}>
    <InfoTabs />
    <form>
      <p>Contact us:</p>
      <ButtonToolbar>
        <Button>Address</Button>
        <Button>Contact</Button>
      </ButtonToolbar>
    </form>
  </div>
)

export default InfoCard