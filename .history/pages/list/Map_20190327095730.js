import React from 'react';

import {Platform, StyleSheet, Text, View, Dimensions, Button} from 'react-native';
// import { MapView, Location, Initializer } from 'react-native-baidumap-sdk'
import { MapView, MapTypes, Geolocation, Overlay } from 'react-native-baidu-map'
const {height, width} = Dimensions.get('window');

class Mapping extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      location: null
    }
  }

  async componentDidMount () {
    // Initializer.init('LlPEpGIjOMS2bc2SOkDDSDTHMAtCjomp').catch(e => console.error('Initializer', e))

    // await Location.init();
    // Location.setOptions({ gps: true });
    // this.listener = Location.addLocationListener(location => {
    //   this.setState({ location });
    // });
    // Location.start();
  }

  componentWillUnmount () {
    // Location.stop()

  }
  

// state = { location: null }

render() {
  // return <Text>aaa</Text>
  // return (
  //   <View style={styles.container}>
  //   <MapView 
  //     onLoad={() => console.log('onLoad')}
  //     onClick={point => console.log(point)}
  //     location={this.state.location} locationEnabled />
  //   </View>
  // )
  // return <MapView satellite />
  // return <MapView center={{ latitude: 39.2, longitude: 112.4 }} />
  return (
  <View style={styles.container}>
        <MapView 
          width={width} 
          height={400} 
          zoom={18}
          trafficEnabled={true}
          zoomControlsVisible={true}
          mapType={MapTypes.SATELLITE}
          center={{ longitude: 113.960453, latitude: 22.546045 }}
        >
        </MapView>
      </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});


export default Mapping