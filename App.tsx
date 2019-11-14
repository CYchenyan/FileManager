/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Details from './pages/Details';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './pages/Home';

const AppNavigator = createStackNavigator({
  Home: Home,
  Details: Details
},{
  initialRouteName: 'Home'
})

const AppContainer = createAppContainer(AppNavigator);

export default class HelloWorldApp extends React.Component {
  render() {
    return <AppContainer />
  }
}
