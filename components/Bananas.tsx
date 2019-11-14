import React, {Component} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    };
    return (
      <View>
        <Image source={pic} style={styles.img} />
        <View style={styles.viewWrapper}>
          <View style={styles.view1} />
          <View style={styles.view2} />
          <View style={styles.view3} />
          <Text style={styles.text}>jsofjsdjfsd</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  viewWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  view1: {
    width: 50,
    height: 50,
    backgroundColor: 'powderblue',
  },
  view2: {
    width: 50,
    height: 50,
    backgroundColor: 'skyblue',
  },
  view3: {
    width: 50,
    height: 50,
    backgroundColor: 'steelblue',
  },
  text: {
    fontSize: 20,
    fontWeight: 800
  }
});
