import React, { Component } from 'react'
import * as Permissions from 'expo-permissions'
import { Camera } from 'expo-camera'
import { View } from 'react-native'
import { Button, Text } from 'native-base'
import { withNavigation } from 'react-navigation'
import * as ImageManipulator from 'expo-image-manipulator'

class RecordCamera extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    aspect: '16:9'
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({ hasCameraPermission: status === 'granted' })
  }

  updateAspectRatio = async () => {
    if (this.camera) {
      const supported = await this.camera.getSupportedRatiosAsync()
      this.setState({ aspect: supported[supported.length - 1] })
    }
  }

  snap = async () => {
    if (this.camera) {
      try {
        const photoRaw = await this.camera.takePictureAsync()
        const photo = await ImageManipulator.manipulateAsync(
          photoRaw.uri,
          [{ resize: { width: 600 } }],
          { base64: true }
        )
        this.props.navigation.navigate('RecordForm', { photo })
      } catch (err) {
        console.log(err)
      }
    }
  }

  render() {
    const { hasCameraPermission, type, aspect } = this.state
    if (hasCameraPermission === null) {
      return <View />
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            style={{ flex: 1 }}
            type={type}
            ratio={aspect}
            ref={ref => (this.camera = ref)}
            onCameraReady={this.updateAspectRatio}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'center'
              }}
            >
              <Button rounded light onPress={this.snap}>
                <Text>Snap</Text>
              </Button>
            </View>
          </Camera>
        </View>
      )
    }
  }
}

export default withNavigation(RecordCamera)
