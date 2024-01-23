import { StyleSheet, View } from "react-native"
import React from 'react';

import Catgeorylayout from "../components/Catgeorylayout";



const Categories = () => {
  
    return (

        <View style={styles.container}>
            <View style={styles.topBorder} />
         
            <Catgeorylayout />

            {/* <View style={styles.bottomBorder} /> */}
        </View>

    )
}

export default Categories;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    topBorder: {
        borderTopWidth: 1,
        borderTopColor: 'lightgrey',
    },
    bottomBorder: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
    },


});