import React, {useState, useEffect} from 'react';
import {Animated, View, Text, StyleSheet} from 'react-native';

const FadeInView = props => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

export default () => {
  return (
    <View style={styles.container}>
      <FadeInView style={styles.animation}>
        <Text style={styles.text}>Fading in</Text>
      </FadeInView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    width: 250,
    height: 50,
    backgroundColor: 'powderblue',
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
});
