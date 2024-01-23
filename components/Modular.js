import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { useState } from 'react';
import { AntDesign, MaterialIcons } from '@expo/vector-icons'

const styles = StyleSheet.create({
    mainconatiner: {
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1
    },
    container: {
        flex: 1,
        // marginTop: 10, 
        backgroundColor: 'white'

    },
    subcontainer: {
        flexDirection: 'row',
        marginTop: 15,
        // marginHorizontal: 10,
        marginBottom: 12
    },
    iconcontainer: {
        marginHorizontal: 2
    },
    image: {
        height: 30,
        width: 35,
        resizeMode: 'contain',
        marginTop: 6,
        marginHorizontal: 10
    },
    headingtext: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black'
    },

    subtext: {
        color: 'grey',
        fontSize: 13,
        fontWeight: '500',
        maxWidth: 315
    },



    // container2.......................................

    dropdowmpannelcontainer: {
        backgroundColor: '#EAEFF2',
        // borderWidth: 1,
        // borderColor: 'black',
    },
    pannelinnercontainer: {
        flex: 1,
        // marginHorizontal: 18,
        marginVertical: 8
    },
    innercontainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    innercontainerheadtext: {
        fontWeight: '500',
        color: '#3B3B3B',
        fontSize: 16,
        marginHorizontal: 12
    },

    //    nested containers

    nestedmaincontainer: {
        flex: 1,
        backgroundColor: '#D9E4EC',
    },
    nestedcontainer: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 30
    },
    nestedtext: {
        color: 'black',
        marginVertical: 6,
        // fontSize:14,
    }


});

const Modular = () => {
    // const [isContainer2Visible, setContainer2Visible] = useState(false);
    // const [isnestedcontainer1Visible, setnestedcontainer1Visible] = useState(false);
    // const [isnestedcontainer2Visible, setnestedcontainer2Visible] = useState(false);

    // // main container   
    // const handleContainerClick = () => {
    //     setContainer2Visible(!isContainer2Visible);
      
    // };

  


    return (
        <>
            <View style={styles.mainconatiner}>

                {/* main containerss withe image and white bacckground */}

                <TouchableOpacity activeOpacity={1}>
                    <View style={styles.container}>

                        <View style={styles.subcontainer}>

                            <View style={styles.imagecontainer}>
                                <Image source={{ uri: 'https://ii1.pepperfry.com/media/wysiwyg/banners/modularappliances_13042023.jpg' }} style={styles.image} />
                            </View>

                            <View>
                                <Text style={styles.headingtext}>Modular</Text>
                            </View>

                           

                        </View>

                    </View>
                </TouchableOpacity>



           

            </View>

        </>
    )
}

export default Modular;

