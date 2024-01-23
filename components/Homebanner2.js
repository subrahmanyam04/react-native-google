import React from "react";
import { Image, StyleSheet, View } from "react-native";


const Homebanner2 = () => {
    return (
        <View style={styles.container}>
            {/* <View style={styles.imgcontainer}> */}
            <Image
                source={{ uri: 'https://ii1.pepperfry.com/assets/3e3fd451-8c91-45eb-920d-79937573815a.jpg' }}
                style={styles.image}
               
            />
            {/* </View> */}
            
        </View>
    )
}

export default Homebanner2

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
       
      },
    //   imgcontainer:{
    //     flex:0.3,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   },
    image: {
        width: '100%',
        height: 93, // Set a fixed height or adjust as needed
        resizeMode:'contain',
      },

    
})