import { StyleSheet, Text, View } from "react-native"
import Giftcardtabs from "../components/Giftcardtabs";

// import Gifttabpages from "../components/Gifttabpages";
import React from 'react';

const Giftcard = () => {
   
    return (
       
            <View style={styles.container}>
            <View style={styles.topBorder} />
            <Giftcardtabs />
            <View style={styles.bottomBorder} />
            </View>
           
      
    )
}

export default Giftcard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topBorder: {
        borderTopWidth: 1,
        borderTopColor: 'lightgrey',
    },
    bottomBorder: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
    },
   

})

