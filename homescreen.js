import React from 'react';
import {
  StyleSheet,
  Text,
  Keyboard,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  Button,
  Image,
  TouchableHighlight,
  ImageBackground,Platform,Animated
} from 'react-native';



class Homescreen extends React.Component {

 

  render() {
    return (


      <View style={styles.container}>
        <View style={styles.textContainer}>
      
      
      <Image source ={{uri:'https://codehs.com/uploads/c5b7a0dda33ae8c3fd98f88c017309cd'}}
 style={{ height: 200, width: 200, justifyContent: 'center', }}
/>
         
          

          <Image source ={{uri:'https://assets.pando.com/_versions/2014/05/pickwick-t-shirt-rack_featured.png'}}
 style={{ height: 250, width: 250, justifyContent: 'center', }}
/>
          
            </View>


 

<View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Style')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            GET STARTED
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>

 

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },


  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },


  text: {
    
    fontSize: 20,
    fontWeight:'bold',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

   touchableButton1: {
      
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        marginBottom: 50,
         borderRadius: 10,
   
   
    },
   
    buttonText: {
     
        color:'red',
        fontSize: 14,
        fontWeight:'bold',
    }
});


export default Homescreen;
