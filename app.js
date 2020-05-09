import React, { Component } from 'react';
import { StyleSheet, Text, Keyboard,  View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Platform,Button, Image, TouchableHighlight,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Homescreen from './src/login/homescreen.js';
import Style from './src/login/style.js';
import Inspo from './src/login/inspo.js';
import Event from './src/login/event.js';
import Dress from './src/login/dress.js';
import Saweetie from './src/login/saweetie.js';
import Rihanna from './src/login/rih.js';
import TeyanaTaylor from './src/login/tt.js';
import Other from './src/login/other.js';
import Party from './src/login/party.js';
import Dinner from './src/login/dinner.js';
import Date from './src/login/date.js';
import Business from './src/login/business.js';



const RootStack = createStackNavigator(
{
  Home: { screen: Homescreen },
  Style: { screen: Style },
  Inspo: { screen: Inspo},
  Event: { screen: Event},
  Dress: { screen: Dress},
  Party: { screen: Party},
  Dinner:{ screen: Dinner},
  Date: { screen: Date},
  Business:{ screen: Business},
  Saweetie: { screen: Saweetie},
  Rihanna:{ screen: Rihanna},
  TeyanaTaylor: { screen: TeyanaTaylor},
  Other:{ screen: Other},
},
{
    initialRouteName: 'Home',
}

);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

