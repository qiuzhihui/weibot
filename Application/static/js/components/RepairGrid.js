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
    description:  'If the A/C system stops working completely or begins to blow warmer air than usual,'+
                  'our certified technicians will thoroughly inspect the system and provide a written' + 
                  'estimate for any repairs needed. The causes of A/C failure are many; from as simple' +
                  'as a blown fuse to as complicated as a seized A/C compressor. We will diagnose the' +
                  'problem and get you back on the road and staying cool in no time!' +                  
                  'Our technicians use quality parts and are experienced with all types of vehicles.',
  },
  {
    key: 3,
    name: 'Brake Services',
    iconClass: 'fa fa-hand-paper-o',
    description:  'If the A/C system stops working completely or begins to blow warmer air than usual,'+
                  'our certified technicians will thoroughly inspect the system and provide a written' + 
                  'estimate for any repairs needed. The causes of A/C failure are many; from as simple' +
                  'as a blown fuse to as complicated as a seized A/C compressor. We will diagnose the' +
                  'problem and get you back on the road and staying cool in no time!' +                  
                  'Our technicians use quality parts and are experienced with all types of vehicles.',
  },
  {
    key: 4,
    name: 'Computer Diagnostics',
    iconClass: 'fa fa-desktop',
    description:  'If the A/C system stops working completely or begins to blow warmer air than usual,'+
                  'our certified technicians will thoroughly inspect the system and provide a written' + 
                  'estimate for any repairs needed. The causes of A/C failure are many; from as simple' +
                  'as a blown fuse to as complicated as a seized A/C compressor. We will diagnose the' +
                  'problem and get you back on the road and staying cool in no time!' +                  
                  'Our technicians use quality parts and are experienced with all types of vehicles.',
  },
  {
    key: 5,
    name: 'Coolant Fluid Exchange',
    iconClass: 'fa fa-snowflake-o',
    description:  'If the A/C system stops working completely or begins to blow warmer air than usual,'+
                  'our certified technicians will thoroughly inspect the system and provide a written' + 
                  'estimate for any repairs needed. The causes of A/C failure are many; from as simple' +
                  'as a blown fuse to as complicated as a seized A/C compressor. We will diagnose the' +
                  'problem and get you back on the road and staying cool in no time!' +                  
                  'Our technicians use quality parts and are experienced with all types of vehicles.',
  },
  {
    key: 6,
    name: 'Factory Scheduled Maintenance',
    iconClass: 'fa fa-cog',
    description:  'If the A/C system stops working completely or begins to blow warmer air than usual,'+
                  'our certified technicians will thoroughly inspect the system and provide a written' + 
                  'estimate for any repairs needed. The causes of A/C failure are many; from as simple' +
                  'as a blown fuse to as complicated as a seized A/C compressor. We will diagnose the' +
                  'problem and get you back on the road and staying cool in no time!' +                  
                  'Our technicians use quality parts and are experienced with all types of vehicles.',
  },
  {
    key: 7,
    name: 'Headlight Restoration',
    iconClass: 'fa fa-car',
    description:  'If the A/C system stops working completely or begins to blow warmer air than usual,'+
                  'our certified technicians will thoroughly inspect the system and provide a written' + 
                  'estimate for any repairs needed. The causes of A/C failure are many; from as simple' +
                  'as a blown fuse to as complicated as a seized A/C compressor. We will diagnose the' +
                  'problem and get you back on the road and staying cool in no time!' +                  
                  'Our technicians use quality parts and are experienced with all types of vehicles.',
  },
  {
    key: 8,
    name: 'Oil Change Services',
    iconClass: 'fa fa-cogs',
    description:  'If the A/C system stops working completely or begins to blow warmer air than usual,'+
                  'our certified technicians will thoroughly inspect the system and provide a written' + 
                  'estimate for any repairs needed. The causes of A/C failure are many; from as simple' +
                  'as a blown fuse to as complicated as a seized A/C compressor. We will diagnose the' +
                  'problem and get you back on the road and staying cool in no time!' +                  
                  'Our technicians use quality parts and are experienced with all types of vehicles.',
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