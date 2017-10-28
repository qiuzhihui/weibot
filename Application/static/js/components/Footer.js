import React from 'react'
import FooterSocialIcon from './FooterSocialIcon'
import FooterContact from './FooterContact'
import {Col, Row, Grid} from 'react-bootstrap';

const style = {
    display: 'block'
}

const colStyle = {
  left: '10px',
}

const copyright = {
  left: '25px',
}

const AppFooter = () => (
  <Grid style={style}>
    <Row>
      <Col style={colStyle} xs={12} md={6}>
        <FooterSocialIcon />
      </Col>
      <Col style={colStyle} xs={12} md={6}>
        <FooterContact />
      </Col>
      <Col style={copyright} xs={12} md={12}>
        <ul className="list-inline">
           <li>
              <p className="copyright text"> Uboston Auto School</p>
           </li>
           <li className="footer-menu-divider">&sdot;</li>
           <li>
              <p id="author" className="copyright text-muted small">Created By Jumbos</p>
           </li>
           <li className="footer-menu-divider">&sdot;</li>
           <li>
              <p className="copyright text-muted small">
                 Copyright Aug. 2017
              </p>
           </li>
        </ul>
      </Col>
    </Row>
  </Grid>
)

export default AppFooter