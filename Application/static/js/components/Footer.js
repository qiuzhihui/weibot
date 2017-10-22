import React from 'react'
import FooterSocialIcon from './FooterSocialIcon'
import FooterContact from './FooterContact'
import {Col, Row} from 'react-bootstrap';

const style = {
    padding: '20px 10px 10px 0px',
    backgroundColor: '#f8f8f8',
    display: 'block'
}

const colStyle = {
  left: '10px',
}

const AppFooter = () => (
  <Row style={style}>
  <footer>
    <Col style={colStyle} xs={12} md={6}>
      <FooterSocialIcon />
    </Col>
    <Col style={colStyle} xs={12} md={6}>
      <FooterContact />
    </Col>
  </footer>
  </Row>
)

export default AppFooter