import React from 'react'
import FooterSocialIcon from './FooterSocialIcon'
import FooterContact from './FooterContact'
import {Col, Row, Grid} from 'react-bootstrap';


const footer = {
  background: '#383939',
  color: 'rgba(255,255,255,.6)',
}

const style = {
    display: 'block'
}

const colStyle = {
  left: '10px',
}

const AppFooter = () => (
  <footer style={footer}>
    <Grid style={style}>
      <Row>
        <Col xs={12} md={12}>
          <h3> Boston AutoSchool
          </h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <p>
            Boston AutoSchool is bringing trust and simplicity to the used car market. Our goal is to turn what is universally regarded as a burdensome life event into a delightful experience.
          </p>
          <ul className="list-inline">
             <li>
                <p className="copyright text"> © Uboston Auto School</p>
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
        <Col xs={12} md={6}>
          <FooterSocialIcon />
          <FooterContact />
        </Col>
        <Col xs={12} md={12}>

        </Col>
      </Row>
    </Grid>
    </footer>
)

export default AppFooter