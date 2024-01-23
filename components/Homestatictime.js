import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'

const Homestatictime = () => {
    return (
        <View style={styles.container}>
            <View style={styles.verfication}>
                <Text style={styles.text1}>Shop What The Fry Deals</Text>
            </View>

            <View style={styles.verfication}> 
                <Text style={styles.timertext}>
                <Ionicons name="timer-outline" size={15} color="#D8232A" /> Ending in 14h : 12m : 30s
                </Text>
            </View>
            
        </View>
    )
}

export default Homestatictime;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        marginTop:25,
        marginHorizontal:1
        // justifyContent:'space-between'
    },
    verfication: {
        // borderWidth: 1,
        // borderColor: 'black',
        marginHorizontal:3.5
    },
    text1:{
        // fontFamily:"Poppins,sans-serif",
        fontWeight:'bold',
        fontSize: 17,
        color:'#8b4513'
    },
    timertext:{
        fontWeight: 'bold',
        fontSize: 14.5,
        color:'#D8232A',
        marginTop:4.5
    }
})

