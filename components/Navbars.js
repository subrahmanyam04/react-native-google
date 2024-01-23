import Bottomtabnavigator from "./Bottomtabnavigator";
import React from "react";
import Drawercomponent from "./Drawercomponent";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Gifttabpages from "./Gifttabpage1";

const Stack = createNativeStackNavigator();
const Navbars = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName='Main'
            >
                <Stack.Screen name="Main" component={Drawercomponent} />
                {/* <Stack.Screen name="Gifttabs" component={Gifttabpages} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navbars;