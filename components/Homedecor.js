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

const Homedecor = () => {
    const [isContainer2Visible, setContainer2Visible] = useState(false);
    const [isnestedcontainer1Visible, setnestedcontainer1Visible] = useState(false);
    const [isnestedcontainer2Visible, setnestedcontainer2Visible] = useState(false);

    // main container   
    const handleContainerClick = () => {
        setContainer2Visible(!isContainer2Visible);
        setnestedcontainer1Visible('');
        setnestedcontainer2Visible('');
    };

    const handlenestedcontainer1Click = () => {
        setnestedcontainer1Visible(!isnestedcontainer1Visible);
        
    };

    const handlenestedcontainer2Click = () => {
        setnestedcontainer2Visible(!isnestedcontainer2Visible);
        
    };


    return (
        <>
            <View style={styles.mainconatiner}>

                {/* main containerss withe image and white bacckground */}

                <TouchableOpacity onPress={handleContainerClick} activeOpacity={1}>
                    <View style={styles.container}>

                        <View style={styles.subcontainer}>

                            <View style={styles.imagecontainer}>
                                <Image source={{ uri: 'https://ii1.pepperfry.com/media/wysiwyg/banners/home_decorappliances_13042023.jpg' }} style={styles.image} />
                            </View>

                            <View>
                                <Text style={styles.headingtext}>Homedecor</Text>
                                <Text style={styles.subtext} numberOfLines={1} ellipsizeMode="tail">Sofas,Sectional Sofas,Sofa Cum Beds, Futons,Chaise Loungers</Text>
                            </View>

                            <View style={styles.iconcontainer}>
                                {isContainer2Visible ? (
                                    <MaterialIcons name='keyboard-arrow-up' color={'#5B5B5B'} size={24} />
                                ) : <MaterialIcons name='keyboard-arrow-down' color={'#5B5B5B'} size={24} />}
                            </View>

                        </View>

                    </View>
                </TouchableOpacity>



                {/* 1 */}
                {/* inner containers ......Sofas.............(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity onPress={handlenestedcontainer1Click} activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>Sofas</Text>
                                    </View>



                                    <View style={styles.iconcontainer}>
                                        {isnestedcontainer1Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />}
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ......Sofas.............(Ending)which container nested containers */}


                {/* nested containers here for ................Sofas...........(start) */}

                {isnestedcontainer1Visible ? (
                    <View style={styles.nestedmaincontainer}>
                        <View style={styles.nestedcontainer}>
                            <View>
                                <Text style={styles.nestedtext}>3 Seater Sofas</Text>
                            </View>
                            <View>
                                <Text style={styles.nestedtext}>2 Seater Sofas</Text>
                            </View>
                            <View>
                                <Text style={styles.nestedtext}>1 Seater Sofas</Text>
                            </View>
                            <View>
                                <Text style={styles.nestedtext}>Sofa Sets</Text>
                            </View>
                        </View>
                    </View>
                ) : null}
                {/* nested containers here for ................Sofas...........(End) */}


                {/* 2 */}
                {/* inner containers ....Sectional Sofas......(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity onPress={handlenestedcontainer2Click} activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>Sectional Sofas</Text>
                                    </View>


                                    <View style={styles.iconcontainer}>
                                        {isnestedcontainer2Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />}
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ....Sectional Sofas......(End)which container nested containers */}

                {/* nested containers here for ................Sectional Sofas...........(start) */}

                {isnestedcontainer2Visible ? (
                    <View style={styles.nestedmaincontainer}>
                        <View style={styles.nestedcontainer}>
                            <View>
                                <Text style={styles.nestedtext}>LHS Sectional</Text>
                            </View>
                            <View>
                                <Text style={styles.nestedtext}>RHS Sectional</Text>
                            </View>
                            <View>
                                <Text style={styles.nestedtext}>Corner Sofas</Text>
                            </View>

                        </View>
                    </View>
                ) : null}
                {/* nested containers here for ................Sectional Sofas...........(End) */}

                {/* 3 */}
                {/* inner containers ......Sofa Cum Beds.......(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>Sofa Cum Beds</Text>
                                    </View>

                                    {/* <View style={styles.iconcontainer}>
                                        {isnestedcontainer1Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />}
                                    </View> */}

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ...Sofa Cum Beds........(Ending)which container nested containers */}

                {/* 4 */}
                {/* inner containers ......Futons.......(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>Futons</Text>
                                    </View>

                                    {/* <View style={styles.iconcontainer}>
                                        {isnestedcontainer1Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />}
                                    </View> */}

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ...Futons........(Ending)which container nested containers */}

                {/* 5 */}
                {/* inner containers ......chaise Loungers.....(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>Chaise Loungers</Text>
                                    </View>

                                    {/* <View style={styles.iconcontainer}>
                                        {isnestedcontainer1Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />}
                                    </View> */}

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ...chaise Loungers.......(Ending)which container nested containers */}

                {/* 6 */}
                {/* inner containers ......Bean Bags.......(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>Bean Bags</Text>
                                    </View>

                                    {/* <View style={styles.iconcontainer}>
                                        {isnestedcontainer1Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />}
                                    </View> */}

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ...Bean Bags........(Ending)which container nested containers */}

                {/* 7 */}
                {/* inner containers ......Recliners.......(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>Recliners</Text>
                                    </View>

                                    <View style={styles.iconcontainer}>
                                        {/* {isnestedcontainer1Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />} */}
                                        <AntDesign name='plus' color={'#5B5B5B'} size={18} />
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ...Recliners........(Ending)which container nested containers */}

                {/* 8 */}
                {/* inner containers ......Sofa Chairs.......(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>Sofa Chairs</Text>
                                    </View>

                                    <View style={styles.iconcontainer}>
                                        {/* {isnestedcontainer1Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />} */}
                                        <AntDesign name='plus' color={'#5B5B5B'} size={18} />
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ...Sofa Chairs........(Ending)which container nested containers */}

                {/* 9 */}
                {/* inner containers ......Settees & Benches...(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>Settees & Benches</Text>
                                    </View>

                                    <View style={styles.iconcontainer}>
                                        {/* {isnestedcontainer1Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />} */}
                                        <AntDesign name='plus' color={'#5B5B5B'} size={18} />
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ...Settees & Benches.....(Ending)which container nested containers */}

                {/* 10 */}
                {/* inner containers ......Ottomans...(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>Ottomans</Text>
                                    </View>

                                    <View style={styles.iconcontainer}>
                                        {/* {isnestedcontainer1Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />} */}
                                        {/* <AntDesign name='plus' color={'#5B5B5B'} size={18} /> */}
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ...Ottomans.....(Ending)which container nested containers */}

                {/* 11 */}
                {/* inner containers ......Chairs...(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>Chairs</Text>
                                    </View>

                                    <View style={styles.iconcontainer}>
                                        {/* {isnestedcontainer1Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />} */}
                                        <AntDesign name='plus' color={'#5B5B5B'} size={18} />
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ...Chairs.....(Ending)which container nested containers */}

                {/* 12 */}
                {/* inner containers ......Gaming Chairs...(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>Gaming Chairs</Text>
                                    </View>

                                    <View style={styles.iconcontainer}>
                                        {/* {isnestedcontainer1Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />} */}
                                        {/* <AntDesign name='plus' color={'#5B5B5B'} size={18} /> */}
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ...Gaming Chairs.....(Ending)which container nested containers */}

                {/* 13 */}
                {/* inner containers ......Stools & Pouffes...(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>Stools & Pouffes</Text>
                                    </View>

                                    <View style={styles.iconcontainer}>
                                        {/* {isnestedcontainer1Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />} */}
                                        <AntDesign name='plus' color={'#5B5B5B'} size={18} />
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ...Stools & Pouffes.....(Ending)which container nested containers */}

                {/* 14 */}
                {/* inner containers ......Shoe Racks...(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>Shoe Racks</Text>
                                    </View>

                                    <View style={styles.iconcontainer}>
                                        {/* {isnestedcontainer1Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />} */}
                                        <AntDesign name='plus' color={'#5B5B5B'} size={18} />
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ...Shoe Racks.....(Ending)which container nested containers */}

                {/* 15 */}
                {/* inner containers ......Center Tables...(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>Center Tables</Text>
                                    </View>

                                    <View style={styles.iconcontainer}>
                                        {/* {isnestedcontainer1Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />} */}
                                        <AntDesign name='plus' color={'#5B5B5B'} size={18} />
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ...Center Tables.....(Ending)which container nested containers */}


                {/* 16 */}
                {/* inner containers ......Side Tables...(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>Side Tables</Text>
                                    </View>

                                    <View style={styles.iconcontainer}>
                                        {/* {isnestedcontainer1Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />} */}
                                        <AntDesign name='plus' color={'#5B5B5B'} size={18} />
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ...Side Tables.....(Ending)which container nested containers */}

                {/* 17 */}
                {/* inner containers ......TV & Media Units...(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>TV & Media Units</Text>
                                    </View>

                                    <View style={styles.iconcontainer}>
                                        {/* {isnestedcontainer1Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />} */}
                                        {/* <AntDesign name='plus' color={'#5B5B5B'} size={18} /> */}
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ...TV & Media Units.....(Ending)which container nested containers */}

                {/* 18 */}
                {/* inner containers ..Cabinets & Sideboards...(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>Cabinets & Sideboards</Text>
                                    </View>

                                    <View style={styles.iconcontainer}>
                                        {/* {isnestedcontainer1Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />} */}
                                        {/* <AntDesign name='plus' color={'#5B5B5B'} size={18} /> */}
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ...Cabinets & Sideboards.....(Ending)which container nested containers */}

                {/* 19 */}
                {/* inner containers ......Book Shelves...(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>Book Shelves</Text>
                                    </View>

                                    <View style={styles.iconcontainer}>
                                        {/* {isnestedcontainer1Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />} */}
                                        {/* <AntDesign name='plus' color={'#5B5B5B'} size={18} /> */}
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ...Book Shelves.....(Ending)which container nested containers */}

                {/* 20 */}
                {/* inner containers ......Book Cases...(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>Book Cases</Text>
                                    </View>

                                    <View style={styles.iconcontainer}>
                                        {/* {isnestedcontainer1Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />} */}
                                        {/* <AntDesign name='plus' color={'#5B5B5B'} size={18} /> */}
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ...Book Cases.....(Ending)which container nested containers */}

                {/* 21 */}
                {/* inner containers ......Dining Sets...(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>Dining Sets</Text>
                                    </View>

                                    <View style={styles.iconcontainer}>
                                        {/* {isnestedcontainer1Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />} */}
                                        <AntDesign name='plus' color={'#5B5B5B'} size={18} />
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ...Dining Sets.....(Ending)which container nested containers */}

                {/* 22 */}
                {/* inner containers ......Dining Chairs...(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>Dining Chairs</Text>
                                    </View>

                                    <View style={styles.iconcontainer}>
                                        {/* {isnestedcontainer1Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />} */}
                                        {/* <AntDesign name='plus' color={'#5B5B5B'} size={18} /> */}
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ...Dining Chairs.....(Ending)which container nested containers */}

                {/* 23 */}
                {/* inner containers ......Dining Tables...(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>Dining Tables</Text>
                                    </View>

                                    <View style={styles.iconcontainer}>
                                        {/* {isnestedcontainer1Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />} */}
                                        {/* <AntDesign name='plus' color={'#5B5B5B'} size={18} /> */}
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ...Dining Tables.....(Ending)which container nested containers */}

                {/* 24 */}
                {/* inner containers ......Crockery Units...(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>Crockery Units</Text>
                                    </View>

                                    <View style={styles.iconcontainer}>
                                        {/* {isnestedcontainer1Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />} */}
                                        {/* <AntDesign name='plus' color={'#5B5B5B'} size={18} /> */}
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ...Crockery Units.....(Ending)which container nested containers */}

                {/* 25 */}
                {/* inner containers ......Bar Furniture...(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>Bar Furniture</Text>
                                    </View>

                                    <View style={styles.iconcontainer}>
                                        {/* {isnestedcontainer1Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />} */}
                                        <AntDesign name='plus' color={'#5B5B5B'} size={18} />
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ...Bar Furniture.....(Ending)which container nested containers */}

                {/* 26 */}
                {/* inner containers ......Beds...(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>Beds</Text>
                                    </View>

                                    <View style={styles.iconcontainer}>
                                        {/* {isnestedcontainer1Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />} */}
                                        <AntDesign name='plus' color={'#5B5B5B'} size={18} />
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ...Beds.....(Ending)which container nested containers */}

                {/* 27 */}
                {/* inner containers ......Bedside Tables...(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>Bedside Tables</Text>
                                    </View>

                                    <View style={styles.iconcontainer}>
                                        {/* {isnestedcontainer1Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />} */}
                                        {/* <AntDesign name='plus' color={'#5B5B5B'} size={18} /> */}
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ...Bedside Tables.....(Ending)which container nested containers */}

                {/* 28 */}
                {/* inner containers ......Linen Trunks...(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>Linen Trunks</Text>
                                    </View>

                                    <View style={styles.iconcontainer}>
                                        {/* {isnestedcontainer1Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />} */}
                                        {/* <AntDesign name='plus' color={'#5B5B5B'} size={18} /> */}
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ...Linen Trunks.....(Ending)which container nested containers */}

                {/* 29 */}
                {/* inner containers ......Chest of Drawers...(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>Chest of Drawers</Text>
                                    </View>

                                    <View style={styles.iconcontainer}>
                                        {/* {isnestedcontainer1Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />} */}
                                        {/* <AntDesign name='plus' color={'#5B5B5B'} size={18} /> */}
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ...Chest of Drawers.....(Ending)which container nested containers */}

                {/* 30 */}
                {/* inner containers ......Dressing Tables...(Start)which container nested containers */}

                {isContainer2Visible ? (
                    <View style={styles.dropdowmpannelcontainer}>

                        <View style={styles.pannelinnercontainer}>

                            <TouchableOpacity activeOpacity={1}>
                                <View style={styles.innercontainer}>

                                    <View>
                                        <Text style={styles.innercontainerheadtext}>Dressing Tables</Text>
                                    </View>

                                    <View style={styles.iconcontainer}>
                                        {/* {isnestedcontainer1Visible ? (
                                            <AntDesign name='minus' color={'#5B5B5B'} size={18} />
                                        ) : <AntDesign name='plus' color={'#5B5B5B'} size={18} />} */}
                                        <AntDesign name='plus' color={'#5B5B5B'} size={18} />
                                    </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : null}

                {/* inner containers ...Dressing Tables.....(Ending)which container nested containers */}

            </View>

        </>
    )
}

export default Homedecor;

