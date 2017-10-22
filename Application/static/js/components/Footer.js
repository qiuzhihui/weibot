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

const copyright = {
  left: '25px',
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
  </footer>
  </Row>
)

export default AppFooter