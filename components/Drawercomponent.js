import { createDrawerNavigator } from "@react-navigation/drawer";
import Aboutus from "../pages/Aboutus";
import { NavigationContainer } from "@react-navigation/native";
import Bottomtabnavigator from "./Bottomtabnavigator";
import Giftcard from "../pages/Giftcard";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'
import { Image, View } from "react-native";



const drawer = createDrawerNavigator();

const Drawercomponent = () => {
  const renderHeaderRightIcon = () => (
    <View style={{ flexDirection: 'row', marginRight: 10, }}>
      <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHlrY9jyo62tkc5DgLLGgmjIXWeDd9-JnQKKFYtkNZMg&s'}} style={{height:24,width:23,marginRight: 210}}/>
      <Ionicons name="search" size={24} color="black" style={{ marginRight: 10 }} />
      <Ionicons name="heart-outline" size={24} color="black" style={{ marginRight: 10 }} />
      <Ionicons name="cart-outline" size={24} color="black" />
      
    </View>
  );

  // const renderHeaderLeftIcon = () => (
  //   <View>
  //   <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHlrY9jyo62tkc5DgLLGgmjIXWeDd9-JnQKKFYtkNZMg&s'}} style={{height:10,width:10}}/>
  //   </View>
  // )

  return (

    <drawer.Navigator
      screenOptions={{
        // headerStyle: { backgroundColor: '#351401' },
        // headerTintColor: 'white',
        // sceneContainerStyle: { backgroundColor: "#3f2f25" },
        // drawerContentStyle:{ backgroundColor: '#351401' },
        drawerInactiveTintColor:'rgba(28,28,30,0.68)',
        drawerActiveTintColor: 'rgba(28,28,30,0.68)',
        drawerActiveBackgroundColor: 'white',
        

      }}

    >
      <drawer.Screen name='Home1' component={Bottomtabnavigator} options={{ headerTitle: '', headerRight: () => renderHeaderRightIcon() }} />
      <drawer.Screen name='Aboutus' component={Aboutus} />
    </drawer.Navigator>

  )
}

export default Drawercomponent;