import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const Homedbcardslider2 = () => {
    const images = [
        {
            id: 1,
            imgrul1: 'https://ii1.pepperfry.com/assets/c3c9be57-b28f-4c50-bbc4-0705596ebf72.jpg',
            title1: 'Queen Size Beds',
            imgrul2: 'https://ii1.pepperfry.com/assets/cea8b53d-502d-41d3-9298-db27c75f0079.jpg',
            title2: 'Cushion Covers',
        },
        {
            id: 2,
            imgrul1: 'https://ii1.pepperfry.com/assets/43aff034-e50c-4ab1-8475-940d4f9c27cb.jpg',
            title1: 'Shelf Floor Lamps',
            imgrul2: 'https://ii1.pepperfry.com/assets/ed2377a8-caf5-44a7-b6b3-ab9802ff4347.jpg',
            title2: 'Staff Collection',
        },
        {
            id: 3,
            imgrul1: 'https://ii1.pepperfry.com/assets/44ce6be6-9eab-499c-ab5b-a0c2dc119e71.jpg',
            title1: 'Grid Mattress',
            imgrul2: 'https://ii1.pepperfry.com/assets/ac096791-49d1-4862-a903-a2901920daf3.jpg',
            title2: 'Table Vases',
        }
    ]
    return (
        <View style={styles.container}>
            <Text style={styles.headingtext}>Follow Home Interior Trends</Text>
            <FlatList
                data={images}
                renderItem={(itemData) => {
                    console.log("items in dbslider", itemData)
                    return (
                        <View style={styles.seccontainer}>
                            <View>
                                <Image source={{ uri: itemData.item.imgrul1 }} style={styles.image} />
                                <Text style={styles.dbtext}>{itemData.item.title1}</Text>
                                <Text style={styles.subdbtext}>1500+ Options,Starting at ₹144</Text>
                            </View>
                            <View style={styles.verfic}>
                                <Image source={{ uri: itemData.item.imgrul2 }} style={styles.image} />
                                <Text style={styles.dbtext}>{itemData.item.title2}</Text>
                                <Text style={styles.subdbtext}>1500+ Options,Starting at ₹144</Text>
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

export default Homedbcardslider2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 2,
        marginVertical: 10

    },
    seccontainer: {
        flex: 1,
        flexDirection: 'column',
        // marginHorizontal:2
    },
    image: {
        width: 240,
        height: 260,
        margin: 2,
        borderRadius: 2,
        resizeMode: 'contain'

    },
    verfic: {
        marginTop: 10,

    },
    dbtext: {

        color: '#333333',
        fontWeight: 'bold',
        fontSize: 16,
        marginHorizontal: 2
    },
    subdbtext: {
        color: '#848484',
        fontWeight: '500',
        marginHorizontal: 2

    },
    headingtext:{
        color:'#8b4513',
        fontWeight:'bold',
        fontSize: 18,
        // marginLeft:4,
        marginTop:25,
        marginBottom:10
    }
})