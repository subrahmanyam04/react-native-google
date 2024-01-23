import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Gifttabpage1 from "./Gifttabpage1";
import Gifttabpage2 from "./Gifttabpage2";
import { StyleSheet, View } from "react-native";

const Giftcardtabs = () => {

    const Tab = createMaterialTopTabNavigator();

    return (
       
        <Tab.Navigator
            screenOptions={{
                swipeEnabled: false,
                tabBarActiveTintColor: '#ff4500',
                tabBarInactiveTintColor: 'black', // Set active tab text color to red
                tabBarIndicatorStyle: { backgroundColor: '#ff4500' }, // Set tab indicator color to red
                tabBarLabelStyle: {
                    // color:'black',
                    fontWeight: 'bold',
                    fontSize: 14
                },
                tabBarPressColor: 'transparent', // Disable the ripple effect color
                tabBarPressOpacity: 1, // Set the opacity to 1 to effectively disable the ripple effect
                tabBarStyle: { height: 50}, // Set the height of the tab bar to 100
            }}
        >
            <Tab.Screen name="BUY GIFT CARD" component={Gifttabpage1} />
            <Tab.Screen name="REDEEM GIFT CARD" component={Gifttabpage2} />
        </Tab.Navigator>
    
    )
}

export default Giftcardtabs;

// const styles = StyleSheet.create({
//     tabBar: {
//         backgroundColor: '#fff',
//     },
//     tabBarLabel: {
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
   

// });



