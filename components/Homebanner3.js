import React from "react";
import { Image, StyleSheet, View } from "react-native";


const Homebanner3 = () => {
    return (
        <View style={styles.container}>
            {/* <View style={styles.imgcontainer}> */}
            <Image
                source={{ uri: 'https://ii1.pepperfry.com/assets/00e88457-e578-4895-95a7-d511913bc6ad.jpg' }}
                style={styles.image}
               
            />
            {/* </View> */}
            
        </View>
    )
}

export default Homebanner3

const styles = StyleSheet.create({
    container: {
        flex:1,
        // justifyContent: 'center',
        // alignItems: 'center',
       marginTop:20
      },
    //   imgcontainer:{
    //     flex:0.3,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   },
    image: {
        width: '100%',
        height: 180, // Set a fixed height or adjust as needed
        resizeMode: 'contain',
      },

    
})