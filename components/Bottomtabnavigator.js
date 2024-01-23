import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import Home from "../pages/Home";
import Myaccount from "../pages/Myaccount";
import Giftcard from "../pages/Giftcard";
import Categories from "../pages/Categories";
import Store from "../pages/Store";
import { Ionicons } from '@expo/vector-icons'

const bottom = createBottomTabNavigator();
const Bottomtabnavigator = () => {
    
    return (

        <bottom.Navigator screenOptions={{

            tabBarStyle: { backgroundColor: 'white', width: '100%', alignSelf: 'center' },
            tabBarActiveTintColor: '#ff4500',
            // headerRight : ({tintColor}) =>
            // <Ionicons icon='add' size={24} color={tintColor} onPress={() => {navigation.navigate('Manage Express')}}/>

        }}
        >

            <bottom.Screen name='Home' component={Home} options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name='home-outline' color={color} size={size} />
                ),
            }}
            />

            <bottom.Screen name='Myaccount' component={Myaccount}

            
                options={{
                    headerShown: false, tabBarIcon: ({ color, size }) => (
                        <Ionicons  name='person-outline' size={size} color={color} />
                    ),
                }} />

            <bottom.Screen name='Giftcard' component={Giftcard}
                options={{
                    title: 'Giftcard',
                    tabBarLabel: 'Giftcard',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='gift-outline' size={size} color={color} />
                    ),
                }} />

            <bottom.Screen name='Store' component={Store}
                options={{
                    title: 'Store',
                    tabBarLabel: 'Store',
                    headerShown: false,
                    tabBarIcon: ({color,size}) =>(
                      <Ionicons name='location-outline' size={size} color={color}/>
                    ),
                }} />

            <bottom.Screen name='Categories' component={Categories}
                options={{
                    title: 'Categories',
                    tabBarLabel: 'Categories',
                    headerShown: false,
                    
                    tabBarIcon: ({color,size}) =>(
                      <Ionicons name='information-circle-outline' size={size} color={color}/>
                    ),
                }} />


        </bottom.Navigator>


    )
}

export default Bottomtabnavigator;