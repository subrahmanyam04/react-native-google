// DetailsScreen.js
import React from 'react';
import { View, Text, ScrollView, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Gifttab1layout from './Gifttab1layout';
import { useNavigation } from '@react-navigation/native';


const Gifttabpage1 = () => {
const navigation = useNavigation()

  return (
    <>

      <ScrollView>

        <Gifttab1layout />


        <View style={styles.container}>
          <Text style={styles.headingtext}>Received A Gift Card?</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              // Add your button press logic here
              navigation.navigate('REDEEM GIFT CARD')
            }}
            activeOpacity={1}
          >
            <Text style={styles.buttonText}>Check Card Balance & Validity</Text>
          </TouchableOpacity>
        </View>


        

      </ScrollView>
    </>
  );
};

export default Gifttabpage1;


const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      marginTop:15
  },
  button: {
    borderWidth: 1,
    borderColor: '#ff4500',
    marginTop:8,
    padding: 10,
    maxWidth:220,
    
  },
  buttonText: {
    color: '#ff4500',
    textAlign: 'center',
    
  },
  headingtext:{
    fontSize:14,
    fontWeight:'bold',
    color:'black'
  }
});