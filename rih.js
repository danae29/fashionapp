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

class Rihanna extends React.Component {
state = {
loginDisplay: 'block',

feedDisplay: 'none',

imageFeed: [
{
image:'https://www.netclipart.com/pp/m/205-2055872_rihanna-png.png', 
casual:'http://cdn03.cdn.justjared.com/wp-content/uploads/2014/09/rihanna-edun/rihanna-plunging-white-suit-at-edun-fashion-show-05.jpg',

},

{
image: 'https://tomandlorenzo.com/wp-content/uploads/2017/09/Rihanna-FENTY-Beauty-Launch-Event-Red-Carpet-Fashion-Molly-Goddard-Tom-Lorenzo-Site-4.jpg',
casual:'https://codehs.com/uploads/d6f216a03e9e818dcb72900e283535d3',

},

{

casual:'https://www.netclipart.com/pp/m/205-2055872_rihanna-png.png',

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
<Text style={styles.logoText}>Rihanna Attire</Text>



<ScrollView>

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
<Text style={styles.logoText}>Rihanna casual Attire</Text>

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
source={{ uri: pic.casual }}
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

margin: 10,

borderRadius: 5,

shadowOffset: {
width: 0,

height: 2,

},

shadowRadius: 6,

shadowOpacity: 0.3,

elevation: 2,
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



buttonText: {
fontSize: 14,
fontWeight:'bold',

},

textContainer:{
flexDirection: 'row',
alignItems: 'center',

justifyContent: 'center',
}
});
export default Rihanna;
