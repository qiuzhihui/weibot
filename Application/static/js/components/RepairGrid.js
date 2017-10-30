import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap';

const containerStyle = {
  width: "100%"
} 

const rowStyle = {
}

const colStyle = {
  height: '400px'
}

const repairServices = [
  {
    key: 1,
    name: 'Alignments',
    description: 'A wheel alignment consists of adjusting the steering and suspension components ' +
                 'of your vehicle that are connected to your vehicles wheels. It is not an ' + 
                 'adjustment to the tires or wheels themselves. To maximize tread life and ensure ' +
                 'that your vehicle tracks straight, a proper alignment is necessary for even tread ' +
                 'wear and precise steering. A misaligned vehicle could also affect your gas mileage. ' +
                 'With our state-of-the-art computerized alignment machines we will also provide you ' +
                 'with a computer printout showing the adjustments that were made to your vehicle.',
    iconClass: 'fa fa-arrows-alt',
  },
  {
    key: 2,
    name: 'Batteries',
    iconClass: 'fa fa-battery-half',
  },
  {
    key: 3,
    name: 'Brake Services',
    iconClass: 'fa fa-hand-paper-o',
  },
  {
    key: 4,
    name: 'Computer Diagnostics',
    iconClass: 'fa fa-desktop',
  },
  {
    key: 5,
    name: 'Coolant Fluid Exchange',
    iconClass: 'fa fa-snowflake-o',
  },
  {
    key: 6,
    name: 'Factory Scheduled Maintenance',
    iconClass: 'fa fa-cog',
  },
  {
    key: 7,
    name: 'Headlight Restoration',
    iconClass: 'fa fa-car',
  },
  {
    key: 8,
    name: 'Oil Change Services',
    iconClass: 'fa fa-cogs',
  },
]

const listColumns = repairServices.map((service) => {
  return (
    <Col xs={6} md={3} style={colStyle} key={ service.key }>
      <h5><i className={ service.iconClass}></i> { service.name }</h5>
      <span> { service.description } </span>
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