
import { StyleSheet, Text, View, TouchableOpacity, Linking, Image, FlatList } from "react-native";
import { FontAwesome, Entypo } from '@expo/vector-icons';



const Homefooter = () => {

    const bankcards = [
        {
            id: 1,
            imageuri: "https://ii1.pepperfry.com/assets/w23-pf-visa.jpg",
        },
        {
            id: 2,
            imageuri: "https://ii1.pepperfry.com/assets/w23-pf-master-card.jpg",
        },
        {
            id: 3,
            imageuri: "https://ii1.pepperfry.com/assets/w23-pf-maestro.jpg",
        },
        {
            id: 4,
            imageuri: "https://ii1.pepperfry.com/assets/w23-pf-american-express.jpg",
        },
        {
            id: 5,
            imageuri: "https://ii1.pepperfry.com/assets/w23-pf-rupay.jpg",

        },
        {
            id: 6,
            imageuri: "https://ii1.pepperfry.com/assets/w23-pf-dinners-club.jpg",
        },
        {
            id: 7,
            imageuri: "https://ii1.pepperfry.com/assets/w23-pf-wallet.jpg",
        },
        {
            id: 8,
            imageuri: "https://ii1.pepperfry.com/assets/w23-pf-net-banking.jpg",
        },
    ]


    const socialicons = [
        {
            id: 1,
            iconname: 'instagram-with-circle',
            color: '#4C0856',
            url: 'https://help.instagram.com/372819389498306'
        },
        {
            id: 2,
            iconname: 'facebook-with-circle',
            color: '#3b5998',
            url: 'https://www.google.com/search?q=facebook&rlz=1C1UEAD_enIN999IN999&oq=fac&gs_lcrp=EgZjaHJvbWUqDwgAECMYJxjjAhiABBiKBTIPCAAQIxgnGOMCGIAEGIoFMhIIARAuGCcYxwEY0QMYgAQYigUyBggCEEUYQDIGCAMQRRg5MhIIBBAAGBQYgwEYhwIYsQMYgAQyDQgFEAAYgwEYsQMYgAQyDAgGEAAYQxiABBiKBTIHCAcQABiABNIBCTM2MjFqMGoxNagCALACAA&sourceid=chrome&ie=UTF-8'
        },
        {
            id: 3,
            iconname: 'pinterest-with-circle',
            color: 'red',
            url: 'https://in.pinterest.com/'
        },
        {
            id: 4,
            iconname: 'linkedin-with-circle',
            color: 'blue',
            url: 'https://in.linkedin.com/'
        },
        {
            id: 5,
            iconname: 'youtube-with-circle',
            color: '#FF0000',
            url: 'https://youtu.be/4BS-ztrnpoQ?si=G5MvR7naRf-iq1xy'
        },
        {
            id: 6,
            iconname: 'twitter-with-circle',
            color: '#00ABFF',
            url: 'https://twitter.com/?lang=en'
        },
    ]

    const presshandler = async (thisisurl) => {
        console.log('thisisurl', thisisurl)

        try {
            await Linking.openURL(thisisurl);

        } catch (error) {
            console.error('Error opening social media profile:', error);
        }

    }

    return (
        <View style={styles.container}>

            <View style={styles.insidecontainer}>
                <View >

                    <View>
                        <Text style={styles.liketext} >Like what you see? Follow us here</Text>
                    </View>

                    {/* social media icons loop */}
                    <View style={styles.insideinnercontainer}>
                        {socialicons.map((media) => (

                            <TouchableOpacity key={media.id} style={styles.iconspaces} onPress={() => presshandler(media.url)}>
                                <Entypo name={media.iconname} size={34} color={media.color} />
                            </TouchableOpacity>

                        ))}
                    </View>
                    {/* social media icons loop ending */}

                </View>
                {/* image container start*/}
                <View style={styles.spacearound}>
                    <Image
                        source={{ uri: 'https://miro.medium.com/v2/resize:fit:1400/1*flwSmuBgkZtWMy5rel7d3Q.jpeg' }}
                        style={styles.image}
                    />
                </View>
                {/* image container end*/}

                {/* payment container start*/}
                <View>
                    <View>
                        <Text style={styles.liketext}>We Accept</Text>
                    </View>
                    {/* bank cards loop start*/}
                    <View style={styles.bankconatiner}>
                        <FlatList
                            data={bankcards}

                            renderItem={(itemData) => {
                                console.log('itemdata', itemData)
                                return (
                                    <Image source={{ uri: itemData.item.imageuri }}
                                        style={styles.bankimages}
                                    />
                                )
                            }}
                            keyExtractor={(item) => item.id}
                            horizontal={true} //  true for horizontal scrolling
                            showsHorizontalScrollIndicator={false}
                        />

                    </View>
                    {/* bank cards loop ending */}
                </View>
                {/* payment container end*/}

                {/* copy right container start*/}
                <View style={styles.copytextcontainer}>
                    <Text style={styles.copytext}>© Copyright Pepperfry Limited</Text>
                </View>
                {/* copy right container end*/}

            </View>
        </View>

    )
}

export default Homefooter;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: '#eeeeee'
    },
    insidecontainer: {
        flex: 1,
        flexDirection: 'column',
        // marginLeft: 5,
        // marginRight: 5
        marginHorizontal:5
    },
    insideinnercontainer: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 60,
        marginTop: 8
        // marginRight:10
    },
    iconspaces: {
        marginHorizontal: 5
    },
    liketext: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20
    },
    image: {
        width: '100%',
        height: 180, // Set a fixed height or adjust as needed
        resizeMode: 'contain',
    },
    spacearound: {
        // marginLeft: 2,
        // marginRight: 5,
        marginHorizontal:2,
        marginTop: 20
    },
    bankimages: {
        marginHorizontal: 2,
        width: 40,
        height: 25,
        marginTop: 8
    },
    bankconatiner: {
        marginHorizontal: 12
    },
    copytext:{
        color:'#848484',
        fontSize:14,
        textAlign:'center',
        fontWeight:'400'
    },
    copytextcontainer:{
      marginTop:20,
      marginBottom:25
    }
})