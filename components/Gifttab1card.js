import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'

const Gifttab1card = () => {
    return (
        <>

            <View style={styles.container}>
                <View style={styles.subcontainer}>

                    <View style={styles.innerrowcontainer}>
                        <View style={styles.rowcontainer1}>
                            <Ionicons name="mail-open-outline" size={50} color="#121212" />
                        </View>
                        <View>
                            <Text style={styles.rowcon1text}>GO GREEN</Text>
                            <Text style={styles.rowcon2text}>Send a Gift Card Via E-mail</Text>
                        </View>

                    </View>

                    <View style={styles.imagecontainer}>
                        <Image
                            source={{ uri: 'https://images.freekaamaal.com/post_images/1613967771.png' }}
                            style={styles.image}

                        />

                    </View>

                    <View style={styles.buttoncontainer}>
                    
                            <Button title="BUY E-GIFT CARD"   color={'red'} />

                    </View>

                </View>

            </View>
        </>
    )
}

export default Gifttab1card;

const styles = StyleSheet.create({
    container: {
        flex:1,
        // borderWidth: 1,
        // borderColor: 'black',
        borderRadius: 5,
        marginHorizontal: 14,
        // width: 3,
        backgroundColor: 'white',
        marginTop: 15,
        marginBottom: 60,
        shadowColor: 'lightgrey',
        shadowOffset: {
            width: 0,
            height: 20,
        },
        shadowOpacity: 0.6,
        shadowRadius: 5,
        elevation: 10, // For Android

    },
    subcontainer: {
        flex:1,
        flexDirection: 'column',
        // borderWidth: 1,
        // borderColor: 'black',
        marginHorizontal: 15,
        marginVertical: 15
    },
    innerrowcontainer: {
        // flex:1,
        flexDirection: 'row',
    },
    rowcontainer1: {
        marginRight: 10,
    },
    image: {
        width: '100%',
        height: 200, // Set a fixed height or adjust as needed
        resizeMode: 'contain',
    },
    imagecontainer: {
        flex: 1,
        marginTop: 10
    },
    buttoncontainer: {
        marginTop: 14,

    },
    rowcon1text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 8,
        marginLeft: 5
    },
    rowcon2text: {
        color: '#848484',
        fontSize: 14,
        marginLeft: 5
    },
 


})