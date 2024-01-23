import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ImageBackground } from 'react-native';
import Gifttab1card from "./Gifttab1card";
import Gifttab2form from "./Gifttab2form";

const Gifttab2layout = () => {
    return (
            <View style={styles.container}>
              
                <ImageBackground source={{uri:'https://ii1.pepperfry.com/media/catalog/studio/155/1695727144_erode_web.jpg'}}   style={styles.image}>
                 
                 <Gifttab2form/> 
                </ImageBackground>
            </View>
        
    )
}
export default Gifttab2layout;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:'red',
    },
    image: {
  
        width: '100%', // Width will take the full width of the container
        height: '100%',
        // flex:1,
        resizeMode:'contain'
      },

      headingtext:{
        color:'black',
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:70
      },
      subheadingtext:{
        color:'black',
        textAlign:'center',
      }
})