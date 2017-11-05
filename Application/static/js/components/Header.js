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
    console.log(this.props.scrollRef);
    this.props.scrollRef.ref.scrollIntoView();
  }

  render() {
    return (
      <nav className="nav-bar">
        <div className="container" style={header}>
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a onClick={this.scrollToRepair.bind(this)}>REPAIR</a></li>
            <li><a href="#">WHO WE ARE</a></li>
            <li className="pull-right"><a href="#">CONTACT US</a></li>
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