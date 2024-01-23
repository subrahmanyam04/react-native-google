import React from "react";
import { Linking, StyleSheet, Text, View } from "react-native";
import { FontAwesome5,AntDesign } from '@expo/vector-icons'
const Gifttab2infor = () => {
    return(
        <>
        <View style={styles.container}>

         <View>
         <Text style={styles.headingtext}>HOW TO USE A GIFT CARD?</Text>
         </View>

         <View style={styles.chaircontainer}>
         <FontAwesome5 name='chair' color={'#5B5B5B'} size={32} />
         <Text style={styles.dicriptext}>Select an item you want to buy from our catalog of 1Mn+ products</Text>
         </View>

         <View style={styles.giftcontainer}>
         <AntDesign name='gift' color={'#5B5B5B'} size={32} />
         <Text style={styles.dicriptext}>Select Pepperfry Gift Card as the payment option on Checkout page</Text>
         </View>

        </View>

<View style={styles.sidetextcontainer}>
<Text style={styles.sidetext}>Check out our <Text style={styles.sidelinktext} onPress={() =>{ Linking.openURL('https://www.pepperfry.com/customer/needhelp/faq')}}>FAQs</Text> for more</Text>
</View>
</>
    )
}

export default Gifttab2infor;

const styles = StyleSheet.create({
    container :{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    chaircontainer : {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:20
        
    },
    giftcontainer : {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:20
        
    },
    dicriptext:{
        maxWidth:240,
        textAlign:'center',
        color:'black',
        fontSize:16,
        marginTop:8
    },
    sidetextcontainer:{
        flex:1,
        maxWidth:320,
        marginTop:15,
        marginBottom:15,
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    sidetext:{
        color:'black',
        fontSize:14,
        fontWeight:'600'
    },
    sidelinktext:{
        color:'#ff4500'
    },
    headingtext:{
        fontWeight:'bold',
        fontSize:18,
        marginTop:30   
    }
   
})