import React from 'react';
import { StyleSheet, TouchableHighlight, Alert } from 'react-native';
import { WebView } from 'react-native-webview';

class Details extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params.detail;
    const name = params && params.key.split('/')[1];
    return {
      title: name
    };
  };
  render() {
    const { navigation } = this.props;
    console.log('details:', navigation);
    const params = navigation.state.params.detail;
    const name = params && params.key.split('/')[1];
    return (
      <TouchableHighlight
        style={styles.container}
        onLongPress={() => this.downloadFile(name)}>
        <WebView
          source={{
            uri: `http://localhost:8080/file/download?username=chenyan&key=/${name}&mode=inline`
          }}
          style={styles.webView}
        />
      </TouchableHighlight>
    );
  }

  downloadFile = (name: string) => {
    Alert.alert(
      'Please confirm',
      'Do you want to download this file?',
      [
        {
          text: 'OK',
          onPress: () => {
            fetch(
              `http://localhost:8080/file/download?username=chenyan&key=/${name}&mode=attachment`
            )
              .then(() => {
                Alert.alert('download successful');
              })
              .catch(() => {
                Alert.alert('download fail');
              });
          }
        },
        { text: 'Cancel', onPress: () => {} }
      ],
      { cancelable: false }
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  webView: {
    flex: 1,
    marginTop: 30,
    marginBottom: 20
  }
});

export default Details;
