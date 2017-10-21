import React from 'react'
import { connect } from 'react-redux'
import Map from "../components/Map.js"
import GoogleApiWrapper from "../utils/GoogleApiComponent"

// const mapStateToProps = (state, ownProps) => {
//   return {
//     // apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
//     google: ownProps.google,
//     zoom: ownProps.mapSettings.zoom,
//     draggable: ownProps.mapSettings.draggable,
//     scrollwheel: false,
//     initialCenter: ownProps.mapSettings.initialCenter
//   }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onClick: () => {
//       alert('asdfasdf');
//     }
//   }
// }

// const VisibleMap = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Map)

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
// })(VisibleMap)


export class VisibleMap extends React.Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    const style = {
      width: '100%',
      height: '40vh',
    }

    return (      
      <div style={style}>
        <Map google={this.props.google}
             zoom={this.props.mapSettings.zoom}
             initialCenter={this.props.mapSettings.initialCenter}
             draggable={this.props.mapSettings.draggable}
             scrollwheel={this.props.mapSettings.scrollwheel}
             zoomControl={this.props.mapSettings.zoomControl}
             disableDefaultUI={this.props.mapSettings.disableDefaultUI}>
          <Marker />
         </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(VisibleMap)