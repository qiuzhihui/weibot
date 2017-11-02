import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap';
import FlipCardGallery from './FlipCardGallery'

const containerStyle = {
  width: "100%",
  marginBottom: "30px"
} 

const rowStyle = {
}

const colStyle = {
  height: '350px'
}

const repairServices = [
  {
    key: 1,
    name: 'Alignments',
    description: 'A wheel alignment consists of adjusting the steering and suspension components ' +
                 'of your vehicle that are connected to your vehicles wheels. It is not an ',
    iconClass: 'fa fa-arrows-alt',
  },
  {
    key: 2,
    name: 'Batteries',
    iconClass: 'fa fa-battery-half',
    description:  'If the A/C system stops working completely or begins to blow warmer air than usual,',
  },
  {
    key: 3,
    name: 'Brake Services',
    iconClass: 'fa fa-hand-paper-o',
    description:  'If the A/C system stops working completely or begins to blow warmer air than usual,',
  },
  {
    key: 4,
    name: 'Computer Diagnostics',
    iconClass: 'fa fa-desktop',
    description:  'If the A/C system stops working completely or begins to blow warmer air than usual,',
  },
  {
    key: 5,
    name: 'Coolant Fluid Exchange',
    iconClass: 'fa fa-snowflake-o',
    description:  'If the A/C system stops working completely or begins to blow warmer air than usual,',
  },
  {
    key: 6,
    name: 'Factory Scheduled Maintenance',
    iconClass: 'fa fa-cog',
    description:  'If the A/C system stops working completely or begins to blow warmer air than usual,',
  }
]


const listColumns = repairServices.map((service) => {
  return (
    <Col xs={6} md={4} style={colStyle} key={ service.key }>
      <FlipCardGallery serviceName={service.name} description={service.description}/>
    </Col> 
  )
})

const RepairGrid = () => (
  <div style={containerStyle}>
    <Grid >
      <Row className="show-grid" style={rowStyle}>
        { listColumns }
      </Row>
    </Grid>
  </div>
)

export default RepairGrid