import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import logo from './assets/snack-icon.png';

class App extends Component {
  render(){
    return(
      <View style={style.container}>
      <View style={style.container1}>
      <Text style={style.textDesign}>"Hello World!"</Text>
      <Image source={logo} style={style.logo}/>
     </View>
     </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFBF00",
    alignItems: 'center' ,
  } ,
  container1: {
    backgroundColor: "#FF0000",
  } ,
  textDesign:{
    fontSize: 40 , 
    color: '#FFF',
    fontWeight: 'bold',
  },
  logo: {
    height: 50,
    width: 50 ,
  }

});

export default App;