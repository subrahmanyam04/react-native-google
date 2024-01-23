import { Text } from "react-native"
import Signupmodalform from "../components/Signupmodalform";
import { firebase } from '../firebase'
// import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Settoken } from "../Redux/Actions/Tokenaction";
import { connect } from "react-redux";

const Myaccount = ({Settoken,token}) => {
    // const token= ''
    // const [token, setToken] = useState('');
    console.log('token in my account', token)
    // useEffect(() => {
    //     const retrieveToken = async () => {
    //         try {
    //             // Retrieve the stored token using AsyncStorage
    //             const storedToken = await AsyncStorage.getItem('userToken');
    //             if (storedToken) {
    //                 // If a token is found, update the state
    //                 Settoken(storedToken);
    //             }
    //         } catch (error) {
    //             console.error('Error retrieving token:', error.message);
    //         }
    //     };
    //     retrieveToken();
    // }, []);

    const handleLogout = async () => {
        try {
            console.log('working')
            await firebase.auth().signOut();
            // Remove the stored data securely using AsyncStorage
            console.log('working122')
            await AsyncStorage.clear();
            console.log('Token and email removed successfully!');
            Settoken('');
        } catch (error) {
            console.error('Error during logout:', error.message);
        }
    };
    return (
        <>
            {/* <Text>Hii this is update</Text> */}

            {token ? (<Text onPress={handleLogout}>This is Myaccount page</Text>) : (<Signupmodalform />)}

        </>

    )
}

const mapStateToProps = (state) => ({

    // sliderdata: state.Sliderreducer.sliderdata,
    // card1data: state.Card1reducer.card1data,
   token : state.token
    
    // selectedAboutCard: state.Reducer1.selectedAboutCard
    
});

const mapDispatchToProps = {
    Settoken
      // setSelectedAboutCard,
  
  };
  

  export default connect(mapStateToProps, mapDispatchToProps)(Myaccount);