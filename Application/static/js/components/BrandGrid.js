import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap';


const BrandGrid = () => (
  <div style={{ width: "100%"}}>
    <Grid >
      <Row className="show-grid" style={{height:"200px", padding: "10px"}}>

        <Col xs={6} md={3}>
          <img src="https://s3.us-east-2.amazonaws.com/ubostonautoschool/CarFixPage/brand/Jaguar.png" width= "100%"  style={{display:"block", margin:"0 auto"}}></img>
        </Col>
        <Col xs={6} md={3}>
          <img src="https://s3.us-east-2.amazonaws.com/ubostonautoschool/CarFixPage/brand/Lexus.png" width= "100%"  style={{display:"block", margin:"0 auto"}}></img>
        </Col>
        <Col xs={6} md={3}>
          <img src="https://s3.us-east-2.amazonaws.com/ubostonautoschool/CarFixPage/brand/Audi.png" width= "100%"  style={{display:"block", margin:"0 auto"}}></img>
        </Col>
        <Col xs={6} md={3}>
          <img src="https://s3.us-east-2.amazonaws.com/ubostonautoschool/CarFixPage/brand/Benz.png" width= "100%"  style={{display:"block", margin:"0 auto"}}></img>
        </Col>
        <Col xs={6} md={3}>
          <img src="https://s3.us-east-2.amazonaws.com/ubostonautoschool/CarFixPage/brand/Porsche.png" width= "100%"  style={{display:"block", margin:"0 auto"}}></img>
        </Col>
        <Col xs={6} md={3}>
          <img src="https://s3.us-east-2.amazonaws.com/ubostonautoschool/CarFixPage/brand/LandRover.png" width= "100%"  style={{display:"block", margin:"0 auto"}}></img>
        </Col>
        <Col xs={6} md={3}>
          <img src="https://s3.us-east-2.amazonaws.com/ubostonautoschool/CarFixPage/brand/Vw.png" width= "100%"  style={{display:"block", margin:"0 auto"}}></img>
        </Col>
        <Col xs={6} md={3}>
          <img src="https://s3.us-east-2.amazonaws.com/ubostonautoschool/CarFixPage/brand/Bmw.png" width= "100%"  style={{display:"block", margin:"0 auto"}}></img>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default BrandGrid