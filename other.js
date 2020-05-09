import React, { Component } from "react";


import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Expo,Platform, StyleSheet, Button, Image, TouchableHighlight} from 'react-native';

class Inspo extends React.Component {
  state = {
text: ''
};


  render() {
     
    return (
      <View style={styles.containerView}>
            <Text style={styles.text}>
        
            Whats the event ?
            </Text>
         

           <View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('dress')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                           Party
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
              onPress={() => this.props.navigation.navigate('dress')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                           Dinner 
                        </Text>
                    </View>
                </TouchableHighlight><TouchableHighlight
              onPress={() => this.props.navigation.navigate('dress')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                          Date 
                        </Text>
                    </View>
                </TouchableHighlight><TouchableHighlight
              onPress={() => this.props.navigation.navigate('dress')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                          Business
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
loginScreenContainer: {
  flex: 1,
},
textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

loginFormView: {
  flex: 1
},
loginFormTextInput: {
  height: 43,
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

        margin: 5,
         borderRadius: 10,
    borderWidth: 1,
    
   
    },
    logoText: {
  fontSize: 15,
  fontWeight: "800",
  marginBottom: 10,
   marginTop: 10,
  textAlign: 'center',
},

 buttonText: {
     
        color: 'white',
        fontSize: 14,
        fontWeight:'bold',
 }
});


export default Inspo;
