import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'


const Homeslider2 = () => {
    const sliderdata = [
        {
            id:1,
            imageuri: "https://ii3.pepperfry.com/media/catalog/product/s/u/494x544/suveharts-wall-hangings---door-hanging--decorative-items-for-home---home-decor-items---for-office----6tft4r.jpg",
            title: "",

        },
        {
            id:2,
            imageuri: "https://ii2.pepperfry.com/media/catalog/product/y/e/494x544/yellow-traditional-120-tc-100--cotton-queen-bedsheet-with-2-pillow-covers-yellow-traditional-120-tc--x6mn2l.jpg",
            title: "",

        },
        {
            id:3,
            imageuri: "https://ii2.pepperfry.com/media/catalog/product/e/c/494x544/eco-star--900ml-leak-proof--sipper-eco-star--900ml-leak-proof--sipper-mq7wpk.jpg",
            title: "",

        },
        {
            id:4,
            imageuri: "https://ii1.pepperfry.com/media/catalog/product/s/e/494x544/set-of-5-geometric-pattern-jute-16x16-cushion-covers-by-romee-set-of-5-geometric-pattern-jute-16x16--g0bqsf.jpg",
            title: "",

        },
        {
            id:5,
            imageuri: "https://ii1.pepperfry.com/media/catalog/product/m/u/494x544/multicolour-5-mtrs--50-led--usb-operated-led-string-light-multicolour-5-mtrs--50-led--usb-operated-l-kbgukq.jpg",
            title: "",

        },
        {
            id:6,
            imageuri: "https://ii1.pepperfry.com/media/catalog/product/s/n/494x544/snake-natural-plant-in-white-self-watering-plastic-pot-by-ugaoo-snake-natural-plant-in-white-self-wa-yyl6lf.jpg",
            title: "",

        },
    ]
    return (
        <View style={styles.container}>
            
            <FlatList
                data={sliderdata}

                renderItem={(itemData) => {
                    console.log('itemdata', itemData)
                    return (
                        <View style={styles.container2}>
                            <View>
                                <Image source={{ uri: itemData.item.imageuri }}
                                    style={styles.image}
                                />
                                <View style={styles.iconContainer}>
                                    <View style={styles.iconBackground}>
                                        <Ionicons name="heart-outline" size={21} color="#696969" />
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.text1}>Solid Brown Mango Wood Chopping Board</Text>
                            </View>
                            <View>
                                <Text style={styles.pricetext}>
                                    <Text style={styles.firstprice}>₹139 </Text>
                                    <Text style={styles.secondprice}> ₹499</Text>
                                    <Text style={styles.thirdprice}> 72%</Text>
                                </Text>
                            </View>
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

export default Homeslider2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 12,
        marginHorizontal: 3
    },
    container2: {
        flex: 1,
        flexDirection: "column",

        // justifyContent:'space-between'
    },
    image: {
        width: 155, // Set desired width
        height: 175, // Set desired height
        margin: 2//  margin between images
    },

    text1: {
        marginTop:6,
        marginHorizontal:2,
        maxWidth:150,
        fontSize:12,
        color:'black'
    },
    pricetext: {
        margin: 2
    },
    iconContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
       
    },
    iconBackground: {
        top:13,
        right:5,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adjust opacity as needed
        padding: 5,
        borderRadius: 25,
        // borderWidth: 1,
        // borderColor: 'black',
    },
    firstprice:{
         fontWeight:'bold'
    },
    secondprice:{
        textDecorationLine: 'line-through',
        color:'black' 
    },
    thirdprice:{
        fontWeight:'bold',
        fontSize:14.5 ,
        color:'green'
    }


})
