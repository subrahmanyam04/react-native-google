import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'
// import { Shadow } from 'react-native-shadow';

const Homeslider3 = () => {
    const sliderdata = [
        {
            id: 1,
            imageuri: "https://ii1.pepperfry.com/assets/18bbf728-2080-43cb-b904-a308c9347d52.jpg",
            title: "",
            subtitle:""

        },
        {
            id: 2,
            imageuri: "https://ii2.pepperfry.com/media/catalog/product/h/o/494x544/home-gold-aluminium-showpiece-by-purestory-home-gold-aluminium-showpiece-by-purestory-hf2ylf.jpg",
            title: "Pepperfry India",
            subtitle:"Pepperfry store"
         

        },
        {
            id: 3,
            imageuri: "https://ii3.pepperfry.com/media/catalog/product/s/o/494x544/solid--wood-chopping-board-solid--wood-chopping-board-ptecpy.jpg",
            title: "Pepperfry India",
            subtitle:"Pepperfry store"
         

        },
        {
            id: 4,
            imageuri: "https://ii1.pepperfry.com/media/catalog/product/w/h/494x544/white-iron-table-candle-holder-set-of-1-piece-by-hosley-white-iron-table-candle-holder-set-of-1-piec-eqzu0q.jpg",
            title: "Pepperfry India",
            subtitle:"Pepperfry store"
         

        },
        {
            id: 5,
            imageuri: "https://ii1.pepperfry.com/media/catalog/product/m/u/494x544/multicolor-chenille-abstract-5-x-7-feet-machine-made-carpet-by-braids-multicolor-chenille-abstract-5-w1prgd.jpg",
            title: "Pepperfry India",
            subtitle:"Pepperfry store"
          

        },
        {
            id: 6,
            imageuri: "https://ii1.pepperfry.com/media/catalog/product/w/h/494x544/white-polyester-solid-16x16-inches--set-of-2--cushion-inserts-by-mfd-home-furnishing-white-polyester-kyzklx.jpg",
            title: "Pepperfry India",
            subtitle:"Pepperfry store"
           

        },
    ]

    console.log('sliderdata',sliderdata)
    return (
        <View style={styles.container}>

            <FlatList
                data={sliderdata}

                renderItem={(itemData) => {
                    console.log('itemdata', itemData)
                    return (
                        <View style={styles.container2}>

                            <Image source={{ uri: itemData.item.imageuri }}
                                style={[
                                    {
                                      width: itemData.index === 0 ? 140 : 155,
                                      height: 180
                                    },
                                    styles.image
                                  ]}
                            />
                           {itemData.index !== 0 && <View style={styles.overlay} />}
                            <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">{itemData.item.title}</Text>
                            <Text style={styles.subtext} >{itemData.item.subtitle}</Text>

                        </View>
                    )
                }}
                keyExtractor={(item) => item.id}
                horizontal={true} //  true for horizontal scrolling
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Homeslider3;

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.69)', // Adjust the alpha value (0.0 to 1.0) for transparency
        width:155,
        height:180,
        top:2,
        marginRight:2,
        marginLeft:2
    },
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 25,
        marginHorizontal: 3
    },
    container2: {
        // flex: 1,
        // flexDirection: "column",
        position: 'relative',
        // borderRadius: 10,
        overflow: 'hidden',
        // justifyContent:'space-between'
    },
    image: {
        margin: 2,//  margin between images
    },
   

    text1: {
        marginTop: 6,
        marginHorizontal: 2,
        maxWidth: 150,
        fontSize: 12,
        color: 'black'
    },
    pricetext: {
        margin: 2
    },
    text: {
        position: 'absolute',
        bottom: 80, // Adjust as needed
        left: 9,
        right:10,
         // Adjust as needed
        color: 'white', // Change text color as needed
        fontSize: 23, // Change font size as needed
        fontWeight: 'bold', // Adjust font weight as needed

       
    },
    subtext: {
        position: 'absolute',
        bottom: 58, // Adjust as needed
        left: 0,
        right:0,
        justifyContent:'center',
        alignItems:'center',
        textAlign:"center",
         // Adjust as needed
        color: 'white', // Change text color as needed
        fontSize: 14, // Change font size as needed
        fontWeight: 'bold', // Adjust font weight as needed

       
    },


})
