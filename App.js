import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home';
import Myaccount from './pages/Myaccount';
import { NavigationContainer } from '@react-navigation/native';
import Giftcard from './pages/Giftcard';
import Categories from './pages/Categories';
import Store from './pages/Store';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Aboutus from './pages/Aboutus';
import Bottomtabnavigator from './components/Bottomtabnavigator';
import Drawercomponent from './components/Drawercomponent';
import Navbars from './components/Navbars';
import { Provider } from 'react-redux';
import store from './Redux/store';

const bottom = createBottomTabNavigator();
const drawer = createDrawerNavigator();

// const Drawercomponent = () => (
//   <drawer.Navigator
//    >
//     <drawer.Screen name='Aboutus' component={Aboutus}  />
//     {/* <drawer.Screen name='Giftcard' component={Giftcard} /> */}
//   </drawer.Navigator>
// )

const Homename = 'Home'


export default function App() {
  console.log('hii')
  return (
    <>
    
    <StatusBar barStyle="dark-content" /> 
    <Provider store={store}>
    <Navbars/>
 
    </Provider>
      
    </>

  );
}

