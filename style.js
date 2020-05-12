import React, { Component } from "react";


import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Expo,Platform, StyleSheet, Button, Image, TouchableHighlight} from 'react-native';

class Style extends React.Component {
  state = {
text: ''
};


  render() {
     
    return (
      <View style={styles.containerView}>
      <View style={styles.textContainer}>
            <Text style={styles.logoText}>
            Describe Yo style in 3 words 
            </Text>
            <TextInput placeholder='Type Something here' placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />

          

          
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Inspo')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            CONTINUE
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
  backgroundColor: '#fff',
},
textContainer: {
  flex: 1,
   justifyContent: 'center',
    alignItems: 'center',
},

loginFormTextInput: {
  height: 100,
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 5,

},

touchableButton1: {
        backgroundColor: '#7d0ae6',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 50,
         borderRadius: 10,
    borderWidth: 1,
    
   
    },
    logoText: {
  fontSize: 20,
  fontWeight: "800",
  marginBottom: 10,
   marginTop: 10,
  textAlign: 'center',
  fontFamily: 'Frederick Degree'
},

 buttonText: {
     
        color: 'white',
        fontSize: 14,
        fontWeight:'bold',
 }
});


export default Style;
