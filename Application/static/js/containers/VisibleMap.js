import React from 'react'
import { connect } from 'react-redux'
import Map from "../components/Map.js"
import GoogleApiWrapper from "../utils/GoogleApiComponent"

/** STYLE ONE */
// export class VisibleMap extends React.Component {
//   render() {
//     return (
//       <Map google={this.props.google} zoom={14}>
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
// })(VisibleMap)

/** STYLE TWO */
const mapStateToProps = (state, ownProps) => {
  return {
    // apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
    google: ownProps.google,
    zoom: 10
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      alert('asdfasdf');
    }
  }
}

const VisibleMap = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)

export default GoogleApiWrapper({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(VisibleMap)






// export class VisibleMap extends React.Component {
//   render() {
//     if (!this.props.loaded) {
//       return <div>Loading...</div>
//     }

//     return (
//       const style = {
//         width: '80vw',
//         height: '40vh'
//       }
//       <div style={style}>
//         <Map google={this.props.google} />
//       </div>
//     )
//   }
// }

// export Map({
//   apiKey: __GOOGLE_API_KEY__
// })(VisibleMap)