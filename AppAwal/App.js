import React from 'react';
import RegisterPage from './Components/Register';
import LoginPage from '../tutorial/Components/Loginpage'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainLayer from './Components/MainScreen';

const Stack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name="LoginPage" component={LoginPage} />
    <Stack.Screen name="RegisterPage" component={RegisterPage} />
    <Stack.Screen name="MainLayer" component={MainLayer} />
  </Stack.Navigator>
);

    function App() {
      return (
        <NavigationContainer>
          <RootStackScreen />
        </NavigationContainer>
      );
    }


 









  //-------------------------------------------------------------------------------------// 

// const SampleComponent = () => {
//   return(
//     <View style ={{width: 600, height: 80, backgroundColor: '#3498db',}}>
//       <Text> Hello</Text>
//       <Sec />
//       <Text> World</Text>
//       <Text> Cihuy</Text>
//       <Photo />
//       <TextInput style={{borderWidth: 1 }} />
//       <BoxGreen />
//       <Profile />
//     </View>
//   )
// }

// const Sec = () => {
//   return <Text> Odading Mang Oleh</Text>;
// };

// const Photo = () => {
//   return <Image source={{uri: 'http://placeimg.com/100/100/tech'}}
//   style={{width: 100, height: 100}} />
// };

// class BoxGreen extends Component {
//     render(){
//       return <Text>Ini component class</Text>
//     }
// }

// class Profile extends Component{
//   render(){
//     return(
//       <View>
//       <Image source={{uri: 'http://placeimg.com/100/100/nature'}}
//       style={{width: 100, height: 100, borderRadius: 50}} />

//       <Text style={{color: 'red', fontFamily:"notoserif"}}> Ini alam</Text>
//       </View>
//     )    
//   }
// }

export default App;