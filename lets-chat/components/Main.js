import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
class Main extends React.Component {
  static navigationOptions = {
    title: 'Lets Chat',
  };

  state = {
    name: '',
  };

  onPress = () =>
    this.props.navigation.navigate('Chat', { name: this.state.name });

  onChangeText = name => this.setState({ name });


  render() {
    return (
      
      <View style=
      {styles.background} >
        <LinearGradient colors={["#660066", "#000066", 'transparent']}
       style={styles.lineargradient}
       />
       

         <Text style={styles.title}>Enter your name:</Text>
        
        <TextInput
          style={styles.nameInput}
          placeHolder="Raghav"
          onChangeText={this.onChangeText}
          value={this.state.name}
        />
       
        <TouchableOpacity
          onPress={this.onPress} 
        >
         <LinearGradient
          style={styles.buttongradient}
          colors={['#660066', '#9900cc']}
        >
          <Text style={styles.buttonText}>Lets Chat</Text>
         </LinearGradient>
        </TouchableOpacity>
         
      </View>
       
    );
  }
}

const offset = 24;

const styles = StyleSheet.create({
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
    color:"white",
  },
 
  nameInput: {
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: "white",
    borderWidth: 1,
    color:"white",
  },
    lineargradient:{
            flex:1,
            position:"absolute",
            left: 0,
            right: 0,
            top: 0,
            height: 900,
  },
  
  buttonText: {
    fontSize: offset,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
              
  },


 buttongradient:{
    margin:offset,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
 }
   
});

export default Main;
