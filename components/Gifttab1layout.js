import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ImageBackground } from 'react-native';
import Gifttab1card from "./Gifttab1card";

const Gifttab1layout = () => {
    return (
            <View style={styles.container}>
              
                <ImageBackground source={{uri:'https://ii1.pepperfry.com/media/catalog/studio/155/1695727144_erode_web.jpg'}}   style={styles.image}>
                <View>
                        <Text style={styles.headingtext}>
                            HAPPY GIFTING TO YOU
                        </Text>
                        <Text style={styles.subheadingtext}>
                            Spread The Joy By Selecting From The Following Options
                        </Text>
                    </View>  
                  <Gifttab1card/>  
                </ImageBackground>
            </View>
        
    )
}
export default Gifttab1layout;
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