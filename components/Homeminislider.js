import React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";

const Homeminislider = () => {

    const imagedata = [
        {
            id:1,
            imgurl :"https://ii1.pepperfry.com/assets/ca87569c-46dd-4f22-ad49-8db72399463e.jpg",
        },
        {
            id:2,
            imgurl :"https://ii1.pepperfry.com/assets/ca87569c-46dd-4f22-ad49-8db72399463e.jpg",
        },
        {
            id:3,
            imgurl :"https://ii1.pepperfry.com/assets/ca87569c-46dd-4f22-ad49-8db72399463e.jpg",
        },

    ]
    return (
        <View style={styles.container}>
                    <FlatList
        data={imagedata}
        
        renderItem={(itemData)=>{ 
            console.log('itemdata',itemData)
            return(
                <Image source={{uri: itemData.item.imgurl}} 
                style={styles.image}
                />
            )
        }}
        keyExtractor={(item)=>item.id}
        horizontal={true} //  true for horizontal scrolling
        showsHorizontalScrollIndicator={false}
        />

        </View>
    )
}

export default Homeminislider

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:15,
        marginHorizontal:3
    },
    image: {
        width: 350, // Set desired width
        height: 100, // Set desired height
       margin:2 //  margin between images
      },


})