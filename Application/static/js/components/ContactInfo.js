import React from 'react'
import { Image} from 'react-bootstrap';


const rightPaneStyle = {
  width: "100%",
  height: "100%",
  backgroundColor: "#222",
  padding: "20px",
  paddingTop: "15px",
}

const colStyle = {
  padding: "0",
}

const tableStyle = {
  color: "rgb(230, 230, 230)",
}

const tableHeader = {
  marginBottom: '22px'
}

const trStyle = {
  height: "30px",
}

const tdStyleLeft = {
  verticalAlign: "top",
  minWidth: "75px",
  float: 'right',
  textAlign: "right",
}

const tdStyleRight = {
  verticalAlign: "top",
  minWidth: "75px",
  fontWeight: '200',
  paddingLeft: '15px',
  fontSize: '13px',
  paddingTop: "1px",
}

const textStyle = {
  height: "22vh",
}

const imgStyle = {
  width: "8vh",
  margin: '3%',
  height: "8vh"
}

const imgGrid = {
  textAlign: 'center'
}

class ContactInfo extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div style={rightPaneStyle}>
          <div style={tableStyle}>
              <h4 style={tableHeader}>CONTACT US (Prospect Auto)</h4>
              <table style={tableStyle}>
                <tbody>
                  <tr style={trStyle}>
                    <td style={tdStyleLeft}>Weekday </td>
                    <td style={tdStyleRight}>8am-6pm Saturday 9am-3pm</td>
                  </tr>
                  <tr style={trStyle}>
                    <td style={tdStyleLeft}>Sunday </td>
                    <td style={tdStyleRight}>Closed</td>
                  </tr>
                  <tr style={trStyle}>
                    <td style={tdStyleLeft}>Phone: </td>
                    <td style={tdStyleRight}>617-354-2300</td>
                  </tr>
                  <tr style={trStyle}>
                    <td style={tdStyleLeft}>Email: </td>
                    <td style={tdStyleRight}>prospectauto95@gmail.com</td>
                  </tr>
                  <tr style={trStyle}>
                    <td style={tdStyleLeft}>Address: </td>
                    <td style={tdStyleRight}>247 Prospect St. Cambridge, MA</td>
                  </tr>
                </tbody>
              </table>
        </div>
        <div  style={imgGrid}>
          <Image  style={imgStyle} src="static/img/公众号二维码.jpg" alt="110x110" />
          <Image  style={imgStyle} src="static/img/微信客服二维码.png" alt="110x110" />
        </div>
      </div>
    )
  }
}

export default ContactInfo