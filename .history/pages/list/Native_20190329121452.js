import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Button, AlertIOS,  NativeModules, DeviceEventEmitter} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'
import listData from '../mockup/home'
const NativeDialog = NativeModules.JsAndroid

class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }

    this.onPress = this.onPress.bind(this)
    this.fetchData = this.fetchData.bind(this)
    this.updateEvents = this.updateEvents.bind(this)
  }

  componentDidMount () {
    this.fetchData()
    this.testDataListener = DeviceEventEmitter.addListener('pageData', e => {//for Android
      console.log('sss', this.state.data,e.data)
      //更新状态及其他操作
      // this.setState(prevState => ({
      //   data: [...prevState.data,
      //     {
      //       id: prevState.data.length + 1,
      //       value: e.data
      //     }
      //   ]
      // }))
      // this.setState({
      //     data: [{
      //       id: 5,
      //       value: e.data
      //     }]
      // })
      setTimeout(() => {
        // console.log(this.state.data)
      }, 0);
    });
  }

  componentWillUnmount () {
    this.testDataListener.remove()
  }

  updateEvents() {
    NativeModules.JsAndroid.showDialogFragment(msg => {
      console.log( 'aas', msg);
    }, err => {
      console.log(err);
    })
  }

  fetchData () {
    let url = '../mockup/home.json'

    // fetch(url, {
    //   method: 'get'
    // })
    //   .then(res => res.json())
    //   .then(resData => {
    //     console.log(resData)
    //     this.setState({
    //       data: resData
    //     })
    //   })
    //   .catch(err => {
    //     console.log('err: '+ err)
    //   })
      this.setState({
        data: listData.list
      })
  }

  onPress () {
    this.updateEvents()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.dialogContainer}>
          <View style={styles.dialog}>
          <TouchableOpacity
            style={styles.button}
            underlayColor="yellow"
            onPress={this.onPress}>
              <Text style={styles.text}>popup native dialog</Text>
          </TouchableOpacity>
            {/* <Button style={styles.button} onPress={this.onPress} title="popup native dialog"></Button> */}
          </View>
        </View>
        <View style={styles.flatlist}>
          <FlatList
            data={this.state.data}
            renderItem = {({item}) => <Text style={styles.item}>{item.value}</Text>}
          />
        </View>
      </View>
    );
  }
}

export default List

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2656fe',
    paddingLeft: 10,
    paddingRight: 10,
  },
  dialogContainer: {
    // backgroundColor: 'skyblue',
    marginBottom: 10,
    marginTop: 60
  },
  dialog: {
    // flex: 1,
    marginBottom: 6,
    padding: 60,
    backgroundColor: '#eaf3ff',
    borderRadius: 8
  },
  button: {
    backgroundColor: 'blue',
    height: 40,
    // borderWidth: 1,
    borderColor: 'red',
    borderRadius: 8,
    borderColor: '#000',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    // flex: 1,
    color: '#fff',
    fontSize: 16
  },
  flatlist: {
    backgroundColor: '#f6f7fe',
    borderRadius: 8,
    overflow: 'hidden'
  },
  item: {
    // borderColor: '#000',
    // borderWidth: 1,
    padding: 15,
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 2
  }
})