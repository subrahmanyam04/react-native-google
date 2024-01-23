import { ScrollView, StyleSheet, Text, View } from "react-native"
import Homebanner from "../components/Homebanner";
import Homeminislider from "../components/Homeminislider";
import Homebanner2 from "../components/Homebanner2";
import Homestatictime from "../components/Homestatictime";
import Homeslider2 from "../components/Homeslider2";
import Homecard from "../components/Homecard";
import Homeslider3 from "../components/Homeslider3";
import Homecard2 from "../components/Homecard2";
import Homecard3 from "../components/Homecard3";
import Homebanner3 from "../components/Homebanner3";
import Homeiconinfor from "../components/Homeiconinfor";
import Homefooter from "../components/Homefooter";
import Homedbcardslider from "../components/Homedbcardslider";
import Homedbcardslider2 from "../components/Homedbcardslider2";



const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topBorder} />
            <ScrollView
                 alwaysBounceVertical={false}
                //  alwaysBounceVertical={false}
                // Enables bouncing vertically
                style={[{ backgroundColor: 'white' }]}
            >
                <View style={styles.container}>
                    {/* <Text>Some other content or debugging information...</Text> */}
                    <Homedbcardslider />
                    <Homebanner />
                    <Homeminislider />
                    <Homebanner2 />
                    <Homestatictime />
                    <Homeslider2 />
                    <Homecard />
                    <Homeslider3 />
                    <Homecard2 />
                    <Homedbcardslider2 />
                    <Homecard3 />
                    <Homebanner3 />
                    {/* <Homeiconinfor /> // have to discuss with sameer sir  */}
                    <Homefooter />


                </View>
            </ScrollView>
        </View>


    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',

    },
    topBorder: {
        borderTopWidth: 1,
        borderTopColor: 'lightgrey',
    },
    // bottomBorder: {
    //     borderTopWidth: 1,
    //     borderTopColor: 'black',
    // },

})