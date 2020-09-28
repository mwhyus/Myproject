import React, {useState} from 'react'
import { Text, View, Image, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Dimensions, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const RegisterPage = ({navigation}) => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={styles.container}>
     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View>
      <ImageBackground source={require('../android/bglogin.jpg')} style={styles.backgroundImage}>
     
      <TouchableOpacity
        style={styles.backbtn}
        onPress={() => navigation.navigate('LoginPage')}>
      <Image source={require('../android/back.png')}
      style={{width: 30, height: 30, margin: 15, tintColor: '#ecf0f1'}} />
      </TouchableOpacity>

      <Text style={{marginLeft: 150, margin: 40, color: '#ecf0f1'}}>Register</Text>
      <Text style={{marginLeft: 10, color: '#ecf0f1'}}>Email</Text>
      <TextInput style={{borderWidth: 1 , marginBottom: 30, borderRadius: 10, color: '#ecf0f1', borderColor: '#ecf0f1'}} placeholder='What is your Email' />
      <Text style={{marginLeft: 10, color: '#ecf0f1'}}>Username</Text>
      <TextInput style={{borderWidth: 1 , marginBottom: 30, borderRadius: 10, color: '#ecf0f1', borderColor: '#ecf0f1'}} placeholder=' What is your Username' />
      <Text style={{marginLeft: 10, color: '#ecf0f1'}}>Password</Text>
      <TextInput style={{borderWidth: 1 , marginBottom: 30, borderRadius: 10, color: '#ecf0f1', borderColor: '#ecf0f1'}} 
      secureTextEntry={true} placeholder='What is your Password' />
      

      <TouchableOpacity
        style={styles.backbtn}
        onPress={onPress}>
      <Text>Register</Text>
      </TouchableOpacity>


      </ImageBackground>
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const { width, height } = Dimensions.get('window');

const styles=StyleSheet.create ({
  backgroundImage: {
    width: width,
    height: height
  },

  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom: 10
  },

  container: {
    flex: 1
  },

  TextInput: {
    color: '#ecf0f1'
  },
  
  backbtn: {
    opacity: 20 
  }
})

export default RegisterPage