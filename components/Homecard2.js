import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";


const Homecard2 = () => {
    const images = [
        {
            id:1,
            imguri1: "https://ii1.pepperfry.com/assets/d59deae1-2ff6-4a68-9443-e3f374fff0e5.jpg",
            title1:"Montez Sofa",
            imguri2: "https://ii1.pepperfry.com/assets/eb151af2-f780-4a89-8681-fd0119bbb72b.jpg",
            title2:"Wall Plates"
        },
        {
            id:2,
            imguri1: "https://ii1.pepperfry.com/assets/777986f8-1632-49fd-9dee-eb63ed1944ef.jpg",
            title1:'Loft Wardrobes',
            imguri2: "https://ii1.pepperfry.com/assets/dea76e08-e84d-4f94-8fa1-475c4b8d71e9.jpg",
            title2:'Serveware'
        },
     
    ]
    return (



        <View style={styles.maincontainercontainer}>
            <Text style={styles.headingtext}>Discover Our Newest Arrivals</Text>
            {images.map((img) => (
                <View key={img.id} style={styles.container}>
                    <View  style={styles.container1}>

                        <Image  source={{ uri: img.imguri1 }}
                            style={styles.image}
                        />
                        <Text style={styles.text1}>{img.title1}</Text>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text2}>15+ Options,Starting at ₹26,999</Text>
                    </View>
                    <View  style={styles.container2}>

                        <Image source={{ uri: img.imguri2 }}
                            style={styles.image}
                        />
                        <Text style={styles.text1}>{img.title2}</Text>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text2}>250+ Products On Platters, Coffee Mugs, Vases, Showpieces & More</Text>
                    </View>
                </View>
            ))}

        </View>





    )
}

export default Homecard2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        marginTop: 10,
        marginHorizontal: 1
    },
    maincontainer: {
        flex: 1,
        marginTop: 25,
    },
    container1: {
        flex: 1,
        flexDirection: "column",
        // marginTop: 25,
        marginLeft: 3,
        marginRight: 3,
        // borderWidth: 1,
        // borderColor: 'black',
    },
    container2: {
        flex: 1,
        flexDirection: 'column',
        // marginTop: 25,
        marginRight: 3,
        marginLeft: 3,
        // borderWidth: 1,
        // borderColor: 'black',
    },
    image: {
        height: 200,
        width: '100%',
        // resizeMode:'contain',
    },
    text1: {
        color: '#5B5B5B',
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 3
    },
    text2: {
        color: '#848484',
        fontSize: 13,
    },
    headingtext:{
        color:'#8b4513',
        fontWeight:'bold',
        fontSize: 18,
        marginLeft:4,
        marginTop:30,
        marginBottom:5

    }



})

