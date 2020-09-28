import React, { Component, useState } from 'react';
import { Text, View, Image, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Dimensions, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Button } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';  

  const LoginPage = ({navigation}) => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  return(

    <KeyboardAvoidingView
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={styles.container}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View>
      <ImageBackground source={require('../android/background.jpg')} style={styles.backgroundImage}>
      <Text style={styles.text}>!Grab</Text>
      <Image source={require('../android/gojek.png')} 
      style={{width: 50, height: 50, marginLeft: 156}}/>
      <View style={{
        width: 100,
        margin: 50,
        height: 100,
        marginLeft: 125,
        }} />
      <Text style={{marginLeft: 10, color: '#ecf0f1'}}>Username</Text>
      <TextInput style={{borderWidth: 1 , marginBottom: 30, borderRadius: 10, color: '#ecf0f1', borderColor: '#ecf0f1'}} />
      <Text style={{marginLeft: 10, color: '#ecf0f1'}}>Password</Text>
      <TextInput style={{borderWidth: 1 , marginBottom: 30, borderRadius: 10, color: '#ecf0f1', borderColor: '#ecf0f1'}} secureTextEntry={true}/>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MainLayer')}>
      <Text>Login</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity
        style={styles.button}
        onPress={onPress}>
      <Text>Register</Text>
      </TouchableOpacity> */}

        <Button
        title="Register"
        onPress={() => navigation.navigate('RegisterPage')}
      />

      </ImageBackground>
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

  )
}

const { width, height } = Dimensions.get('window');

const Stack = createStackNavigator();

function LoginPag() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login Page" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles=StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#27ae60',
    marginLeft: 145,
    marginTop: 15,
  },

  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom: 10
  },
  container: {
    flex: 1,
    justifyContent: "center"
    // paddingHorizontal: 10
  },

  backgroundImage: {
    width: width,
    height: height
  },
  


})

export default LoginPage;
