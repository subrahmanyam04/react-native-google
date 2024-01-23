import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Homeiconinfor = () =>{
    return(
        <>
        <Text>hii</Text>
        <View style={styles.container}>
            <View style={styles.insidecontainer}>
                <View style={styles.verfic}>
                    <Text>hello1</Text>
                    <Text>hello1bjferfnef</Text>
                </View>
                <View style={styles.verfic}>
                    <Text>hello2</Text>
                    <Text>hello1bjferfnef</Text>
                </View>
                <View style={styles.verfic}>
                    <Text>hello3</Text>
                    <Text>hello1bjferfnef</Text>
                    <Image source={{uri:'https://ii1.pepperfry.com/assets/w22-delivery-usp-icon.svg'}}
                    style={styles.image}
                    />
                </View>

            </View>

        </View>
        </>
    )
}

export default Homeiconinfor;

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    insidecontainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    verfic:{
          borderWidth: 1,
         borderColor: 'black',
        //  justifyContent:'center',
        //  alignItems:'center'
    },
    image:{
        height: 100,
        width: '100%', 
    }
})