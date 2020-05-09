import React, { Component } from 'react';

import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
  Video,
  TouchableHighlight,
  Alert,
  Dimensions,
  ScrollView,
} from 'react-native';

import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;

let deviceWidth = Dimensions.get('window').width;

class TeyanaTaylor extends React.Component {
  state = {
    loginDisplay: 'block',

    feedDisplay: 'none',

    imageFeed: [
      {
        image:
          'https://i.pinimg.com/236x/a9/3f/34/a93f340ff717dcdb3c22cdb611aa5066.jpg',
      },

      {
        image: 'https://images.app.goo.gl/vnAFRGFfW8s9KTAP8',
      },

      {
        
       
      },
    ],
  };

  handleLoginPagePress = () =>
    this.setState(state => ({
      loginDisplay: 'block',

      feedDisplay: 'none',
    }));

  handleFeedPagePress = () =>
    this.setState(state => ({
      loginDisplay: 'none',

      feedDisplay: 'block',
    }));

  render() {
    return (
      <View style={styles.container}>
      <View style={{ display: this.state.loginDisplay }}>
       <View style={styles.contentContainer}>
        <Text style={styles.logoText}>Teyanna Taylor Attire</Text>

        <ScrollView>
          {this.state.imageFeed.map(pic => (
            <View style={styles.characterlistContainer}>
              <View style={styles.middleContainer}>
                <View style={styles.card}>
                  <Image
                    source={{ uri: pic.image }}
                    style={{
                      height: 410,
                      width: 300,
                      justifyContent: 'center',
                      alignContent: 'center',
                    }}
                  />
                </View>
              </View>
            </View>
          ))}
          
          <View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Rhinoplasty')}>
              <View style={styles.touchableButton1}>
                <Text style={styles.buttonText}>NEXT</Text>
              </View>
            </TouchableHighlight>
         </View>
        </ScrollView>

        </View>
              </View>
             
              <View style={{ display: this.state.feedDisplay }}>
       <View style={styles.contentContainer}>
        <Text style={styles.logoText}>Teyanna Taylor Attire</Text>
        

        <ScrollView>
          {this.state.imageFeed.map(pic => (
            <View style={styles.characterlistContainer}>
              <View style={styles.middleContainer}>
                <View style={styles.card}>
                  <Image
                    source={{ uri: pic.image }}
                    style={{
                      height: 410,
                      width: 300,
                      justifyContent: 'center',
                      alignContent: 'center',
                    }}
                  />
                </View>
              </View>
            </View>
          ))}
          
          
        </ScrollView>
        </View>
              </View>
      
          <View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Rhinoplasty')}>
              <View style={styles.touchableButton1}>
                <Text style={styles.buttonText}>NEXT</Text>
              </View>
            </TouchableHighlight>
         </View>
         <View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Rhinoplasty')}>
              <View style={styles.touchableButton1}>
                <Text style={styles.buttonText}>NEXT</Text>
              </View>
            </TouchableHighlight>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',

    justifyContent: 'center',

    height: deviceHeight,

    width: deviceWidth,
  },

  card: {
    height: 410,

    margin: 20,

    borderRadius: 5,

    shadowOffset: {
      width: 0,

      height: 2,
    },

    shadowRadius: 6,

    shadowOpacity: 0.3,

    elevation: 2,
  },

  user: {
    flexDirection: 'row',

    borderColor: 'white',
  },

  name: {
    fontWeight: 'bold',
  },
  touchableButton1: {

backgroundColor: 'red',

height: 40,

width: 200,

alignItems: 'center',

justifyContent: 'center',

marginTop: 5,

marginBottom: 50,

borderRadius: 10,





},



buttonText: {

fontSize: 14,

fontWeight:'bold',

},
});
export default TeyanaTaylor;
