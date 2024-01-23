import React from "react";
import { useState } from 'react';
import { TextInput, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Gifttab2infor from "./Gifttab2infor";

const Gifttab2form = () => {
    const [number, setNumber] = useState('');
    const [pin, setpin] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isFocusedpin, setIsFocusedpin] = useState(false);

    const onChangeNumber = (text) => {
        setNumber(text);
    };

    const onChangepin = (text) => {
        setpin(text);
    };

    const onFocus = () => {
        setIsFocused(true);
    };
    const onFocuspin = () => {
        setIsFocusedpin(true);
    };

    const onBlur = () => {
        setIsFocused(false);
    };
    const onBlurpin = () => {
        setIsFocusedpin(false);
    };
    return (
        <View style={styles.container}>
            <View style={styles.subcontainer}>

                <View style={styles.headingtextcontainer}>
                    <Text style={styles.headingtext}>CHECK CARD BALANCE</Text>
                </View>

                <View style={styles.container2}>
                    <Text style={[styles.placeholder, isFocused || number !== '' ? styles.placeholderFloating : {}]}>
                        Enter Card Number*(16 digit code)
                    </Text>

                    <TextInput
                        style={[styles.input, isFocused ? styles.onfocusinput : {}]}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder=""
                        keyboardType="numeric"
                        onFocus={onFocus}
                        onBlur={onBlur}
                        caretHidden={false} // Show the cursor
                        cursorColor='#ff4500'  // Set the cursor color to red
                    />

                </View>

                <View style={styles.container2}>
                    <Text style={[styles.placeholder, isFocusedpin || pin !== '' ? styles.placeholderFloating : {}]}>
                        Enter Card PIN*(6 digit code)
                    </Text>

                    <TextInput
                        style={[styles.input, isFocusedpin ? styles.onfocusinput : {}]}
                        onChangeText={onChangepin}
                        value={pin}
                        textContentType="password"
                        placeholder=""
                        keyboardType="numeric"
                        onFocus={onFocuspin}
                        onBlur={onBlurpin}
                        caretHidden={false} // Show the cursor
                        cursorColor='#ff4500'  // Set the cursor color to red
                    />

                </View>

                {/* button */}

                <View style={styles.buttoncontainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            // Add your button press logic here

                        }}
                        activeOpacity={1}
                    >
                        <Text style={styles.buttonText}>Check Card Balance & Validity</Text>
                    </TouchableOpacity>
                </View>

                {/* horizontal margin */}
                <View style={styles.horizontalline} />
                    
               

                {/* information  */}

                 <Gifttab2infor/>


            </View>

        </View>

    )
}

export default Gifttab2form;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth: 1,
        // borderColor: 'black',
        borderRadius: 5,
        marginHorizontal: 14,
        // width: 365,
        backgroundColor: 'white',
        marginTop: 120,
        // marginBottom: 60,
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
        flex: 1,
        flexDirection: 'column',
        // borderWidth: 1,
        // borderColor: 'black',
        marginHorizontal: 15,
        marginVertical: 15
    },
    headingtext: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 17,
        textAlign: 'center'

    },
    headingtextcontainer: {
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        marginTop:5

    },


    container2: {
        marginBottom: 10,
        marginTop: 60

    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#BFBDC1',
        // paddingHorizontal: 8,
        // height: 40,

    },
    onfocusinput: {
        borderBottomWidth: 2,
        borderColor: '#ff4500',

    },
    placeholder: {
        position: 'absolute',
        fontSize: 16,
        color: 'gray',
    },
    placeholderFloating: {
        top: -20,
        fontSize: 18,
        color: 'gray', // Change the color as needed
        // borderBottomColor:'#ff4500'
    },


    // button style

    buttoncontainer: {
        flex: 1,
        marginTop: 60,

    },
    button: {
        borderWidth: 1,
        borderColor: '#ff4500',
        backgroundColor: '#ff4500',
        marginTop: 8,
        padding: 14,
        maxHeight: 100

    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    },

    // border
    horizontalline: {
        borderBottomColor: 'lightgrey', // You can set the color you prefer
        borderBottomWidth: 1,
         marginVertical:40

    },



})