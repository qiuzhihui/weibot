import React from 'react'
import FooterSocialIcon from './FooterSocialIcon'
import FooterContact from './FooterContact'
import {Col, Row, Grid} from 'react-bootstrap'
import FooterLegal from './FooterLegal'

const footer = {
  background: '#383939',
  color: 'rgba(255,255,255,.6)',
}

const style = {
    display: 'block'
}

const brandLabal = {
  marginTop: '50px',
  marginBottom: '50px'
}

const AppFooter = () => (
  <footer style={footer}>
    <Grid style={style}>
      <Row>
        <Col xs={12} md={12}>
          <h3 style={brandLabal}> Boston AutoSchool
          </h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <FooterLegal />
        </Col>
        <Col xs={12} md={6}>
          <FooterSocialIcon />
          <FooterContact />
        </Col>
      </Row>
    </Grid>
    </footer>
)

export default AppFooter