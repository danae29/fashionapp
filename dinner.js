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

class Dinner extends React.Component {
  state = {
    loginDisplay: 'block',

    feedDisplay: 'none',

    imageFeed: [
      {
        image:
          'https://codehs.com/uploads/9f4cab59e62d976ca675e8e1608cc317',
          
      },

      {
        image: 'https://codehs.com/uploads/ae419cb5d3c27d58a548df660ba99047',
        
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
        <Text style={styles.logoText}> Dinner Attire</Text>

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

 logoText: {
  fontSize: 20,
  fontWeight: "800",
  marginBottom: 10,
   marginTop: 10,
  textAlign: 'center',
  fontFamily: 'Frederick Degree',
},




});
export default Dinner;
