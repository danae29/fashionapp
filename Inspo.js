import React, { Component } from "react";


import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Expo,Platform, StyleSheet, Button, Image, TouchableHighlight} from 'react-native';

class Inspo extends React.Component {
  state = {
text: ''
};


  render() {
     
    return (
      <View style={styles.containerView}>
            <Text style={styles.logoText}>
        
            Select your style Inspiration
            </Text>
         

           <View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('TeyanaTaylor')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                           Teyana Taylor
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Saweetie')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                           Saweetie 
                        </Text>
                    </View>
                </TouchableHighlight><TouchableHighlight
              onPress={() => this.props.navigation.navigate('Other')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                           Other 
                        </Text>
                    </View>
                </TouchableHighlight><TouchableHighlight
              onPress={() => this.props.navigation.navigate('Rihanna')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                           Rihanna 
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Picture')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                          Picture
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
            </View>
          
      
     
    );
  }

}





const styles = StyleSheet.create({

containerView: {
  flex: 1,
},

textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin:10
  },


touchableButton1: {
        backgroundColor: '#7d0ae6',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',

        margin: 5,
         borderRadius: 10,
    borderWidth: 1,
    
   
    },
 logoText: {
  fontSize: 20,
  fontWeight: "800",
  marginBottom: 10,
   marginTop: 10,
  textAlign: 'center',
  fontFamily: 'Frederick Degree',
},

 buttonText: {
     
        color: 'white',
        fontSize: 14,
        fontWeight:'bold',
 }
});


export default Inspo;
