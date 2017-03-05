import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'

export class Container extends React.Component {
  render() {
    if(!this.props.google) {
      return <div>....loading</div>
    }
    return (
      <div style={styles.map}>
        <Map google={this.props.google}
          style={{width: '90%', height: '90%'}}
          className={'map'}
          zoom={14}
          containerStyle={{}}
          centerAroundCurrentLocation={true}
        >
          <Marker
            name={'SOMA'}
            position={{lat: 37.778519, lng: -122.405640}} />
        </Map>
      </div>
    )
  }
}
const styles = {
  map: {
    width: '100vw',
    height: '100vh'
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAvXrnn09BFXAflNbdwa3mqHRAlEwoLBNQ'
})(Container)
