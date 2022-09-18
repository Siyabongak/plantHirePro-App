import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home/Home';
import Profile from './src/Profile';
import Details from './src/Home/Details';
import * as firebase from 'firebase';
import firebaseConfig from './src/firebaseConfig';
import Rent from './src/Home/Rent';



const Stack = createNativeStackNavigator();  

export default function App() {

  if(!firebase.apps.length) {
    console.log("firebase is connected");
    firebase.initializeApp(firebaseConfig);
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerTitleAlign:"center"}} />
      <Stack.Screen name="Home" component={Home} options={{headerTitleAlign:"center"}} />
      <Stack.Screen name="Profile" component={Profile} options={{headerTitleAlign:"center"}} />
      <Stack.Screen name="Details" component={Details} options={{headerTitleAlign:"center", headerShown: false,}} />
      <Stack.Screen name="Rent" component={Rent} options={{headerTitleAlign:"center"}} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});