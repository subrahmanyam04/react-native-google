import React from "react";
import { Image, StyleSheet, View } from "react-native";


const Homebanner = () => {
    return (
        <View style={styles.container}>
            {/* <View style={styles.imgcontainer}> */}
            <Image
                source={{ uri: 'https://ii1.pepperfry.com/assets/1c4fe76d-ed00-416d-aac9-1f8ad38c478c.jpg' }}
                style={styles.image}
               
            />
            {/* </View> */}
            
        </View>
    )
}

export default Homebanner

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:5
      },
    //   imgcontainer:{
    //     flex:0.3,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   },
    image: {
        width: '100%',
        height: 250, // Set a fixed height or adjust as needed
        resizeMode: 'contain',
      },

    
})