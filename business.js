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

class Business extends React.Component {
  state = {
    loginDisplay: 'block',

    feedDisplay: 'none',

    imageFeed: [
      {
        image:
          'https://codehs.com/uploads/05f515e379e9ea62d0b7762e3d64910a',
          
      },

      {
        image: 'https://i.pinimg.com/236x/e4/7a/9e/e47a9ee1bad2ca788aa179f13a2a3344--nicki-minaj-collection-black-women.jpg',
        
      },

      {
        image: 'https://codehs.com/uploads/26e9c6fc64badc331cf9d72639eb2bd5',
       
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
        <Text style={styles.logoText}> Business Attire</Text>

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
export default Business;
