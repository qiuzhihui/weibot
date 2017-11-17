import React from 'react'
import PropTypes from 'prop-types'
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
    name: 'Power Steering Wheel & Axles',
    description: 'steering wheel pullers, pump, lock, etc. Four-wheel positioning',
    iconClass: 'fa fa-arrows-alt',
    serviceType: 'Axles'
  },
  {
    key: 2,
    name: 'Batteries & Air conditioner',
    iconClass: 'fa fa-battery-half',
    description:  ' Car battery replacement. Add Freon, leaking check',
    serviceType: 'Batteries'
  },
  {
    key: 3,
    name: 'Brake Services',
    iconClass: 'fa fa-hand-paper-o',
    description:  'Complete break service and parts: caliber rotor, break pads, master cylinder repair, etc.',
    serviceType: 'Brake'
  },
  {
    key: 4,
    name: 'Computer Diagnostics',
    iconClass: 'fa fa-desktop',
    description:  'advanced computer diagnostic tools，electronic systems',
    serviceType: 'Diagnostics'
  },
  {
    key: 5,
    name: 'Auto body',
    iconClass: 'fa fa-snowflake-o',
    description:  'Precision auto body repair and unibody straightening. Auto glass repair and replacement',
    serviceType: 'Autobody'
  },
  {
    key: 6,
    name: 'Maintenance',
    iconClass: 'fa fa-cog',
    description:  'manufacturing scheduled services (30000miles, 60000miles,etc). '+
      'Tune-up, oil change, valve job, change timing-belt, spark plugs,  plug wires, and distributor cap and rotor, air filter, timing-belt',
    serviceType: 'Maintenance'
  }
]


const listColumns = repairServices.map((service) => {
  return (
    <Col xs={12} md={4} style={colStyle} key={ service.key }>
      <FlipCardGallery serviceName={service.name} description={service.description} serviceType = {service.serviceType}/>
    </Col> 
  )
})

export class RepairGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.passRefToState(this.refs.repairRef);
  }

  render() {
    return (
      <div style={containerStyle} ref="repairRef">
        <Grid >
          <Row className="show-grid" style={rowStyle}>
            { listColumns }
          </Row>
        </Grid>
      </div>
    )
  }
}

RepairGrid.propTypes = {
  passRefToState: PropTypes.func.isRequired
}

export default RepairGrid