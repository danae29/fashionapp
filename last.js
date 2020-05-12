import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class App extends React.Component {
  state={
    myLast: 'Thank you for Styling Yo Self with us !'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
        {this.state.myLast}
        </Text>
        </View>
    );
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#333333'
  },
  paragraph:{
    fontFamily:'Didot',
    color:'white',
    fontSize:36,
    textAlign:'center',
  }
});
