import React from 'react'
import PropTypes from 'prop-types';

const header = {
  marginTop: '0px'
}

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  scrollToRepair() {
    this.props.scrollRef.repairRef.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  scrollToCarousal() {
    this.props.scrollRef.carousalRef.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  scrollToMap() {
    this.props.scrollRef.mapRef.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  render() {
    return (
      <nav className="nav-bar">
        <div className="container" style={header}>
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a onClick={this.scrollToRepair.bind(this)}>REPAIR</a></li>
            <li><a onClick={this.scrollToCarousal.bind(this)}>WHO WE ARE</a></li>
            <li className="pull-right"><a onClick={this.scrollToMap.bind(this)}>CONTACT US</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

Header.propTypes = {
  scrollRef: PropTypes.object,
}


export default Header