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

class Saweetie extends React.Component {
  state = {
    loginDisplay: 'block',

    feedDisplay: 'none',

    imageFeed: [
      {
        image:
          'https://codehs.com/uploads/7e0fa3d0cb2b61e09c36905b8f981de7',
          casual:'https://codehs.com/uploads/5d9c33a0d9a3430122a93d178e950f70',
      },

      {
        image: 'https://codehs.com/uploads/105b4ddce5ba8c1164c44a2d647ac9fd',
        casual:'https://codehs.com/uploads/42652ebe6bca0ce362634827b06e067b',
      },

      {
        image: 'https://codehs.com/uploads/6718a60e2cdd379c5ea275ea12f42e85',
        casual:'https://codehs.com/uploads/c3ec2e58ad58c83071bd1013c54e04c5',
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
        <Text style={styles.logoText}>Saweetie Attire</Text>
<View style={styles.textContainer}>
<TouchableHighlight
style={styles.button}
onPress={this.handleLoginPagePress}>
<Text style={styles.buttonText}>Dressy</Text>
</TouchableHighlight>

<TouchableHighlight
style={styles.button}
onPress={this.handleFeedPagePress}>
<Text style={styles.buttonText}>Casual</Text>
</TouchableHighlight>

</View>
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
             
              <View style={{ display: this.state.feedDisplay }}>
       <View style={styles.contentContainer}>
        <Text style={styles.logoText}>Teyanna Taylor Attire</Text>
        
<View style={styles.textContainer}>
<TouchableHighlight
style={styles.button}
onPress={this.handleLoginPagePress}>
<Text style={styles.buttonText}>Dressy</Text>
</TouchableHighlight>

<TouchableHighlight
style={styles.button}
onPress={this.handleFeedPagePress}>
<Text style={styles.buttonText}>Casual</Text>
</TouchableHighlight>

</View>
        <ScrollView>
        
          {this.state.imageFeed.map(pic => (
            <View style={styles.characterlistContainer}>
              <View style={styles.middleContainer}>
                <View style={styles.card}>
                  <Image
                    source={{ uri: pic.casual}}
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
button: {

backgroundColor: '#0388fc',

height: 40,

width: 100,

margin: 10,

alignItems: 'center',

justifyContent: 'center',

color: 'white',

borderRadius: 8,

flexDirection: 'row',

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

textContainer:{

flexDirection: 'row',

alignItems: 'center',


justifyContent: 'center',

},

buttonText: {

fontSize: 14,

fontWeight:'bold',

},
});
export default Saweetie;
