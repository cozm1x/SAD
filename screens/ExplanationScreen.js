import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';

const ExplanationScreen =({navigation})=> {
    return (
        <View style={styles.background}>
            <View style={styles.tophalf}>
                <ImageBackground style={styles.img} source={require('../assets/papers.jpeg')}/>
            </View>

            <View style={styles.bottomhalf}>
                <View style={styles.title}>
                    <Text style={{fontWeight: 'bold',fontSize: 20,}}>Simplified Money Transfer</Text>
                </View>

                <View style={styles.words}>
                    <Text style={{fontSize: 15,}} >A simple mobile application that aids both disabled and full abled persons to carry out financial activities.</Text>
                </View>

                <View style={styles.row}>
                    <View style={styles.cirlceicon}/>
                    <Text style={styles.text}>Alzhiemers </Text>
                </View>

                <View style={styles.row}>
                    <View style={styles.cirlceicon}/>
                    <Text style={styles.text}>Amputees </Text>
                </View>

                <View style={styles.row}>
                    <View style={styles.cirlceicon}/>
                    <Text style={styles.text}>Partially Color Blind </Text>
                </View>

                <View style={styles.row}>
                    <View style={styles.cirlceicon}/>
                    <Text style={styles.text}>Fully Abled </Text>
                </View>

               <TouchableOpacity style={styles.btn}  onPress={()=>navigation.navigate('signinScreen')}>
                   <Text style={styles.btntext} >SIGN IN</Text>
               </TouchableOpacity>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#fff',
    },


    img: {
        flex: 1,
        opacity: '45%',
    },

    tophalf:{
        flex: 0.4,
        backgroundColor: '#179787',
    },

    bottomhalf: {
        flex: 0.7,
        backgroundColor: '#fff',
        zIndex: 0,
        justifyContent: 'center',
    }, 

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 0.02,
        margin: 15,
        marginTop: 25,
    },

    title: {
        alignItems: 'center',
        flex: 0.05,
        margin: 15,
        bottom:30,
        paddingTop:10,
    },

    words: {
        alignItems: 'center',
        flex: 0.05,
        margin: 15,
        marginLeft: 30,
        marginTop: 25,
        marginBottom: 40,
        bottom:30,
    },

    cirlceicon: {
        width: 20,
        height: 20,
        backgroundColor: '#a09c9c',
        zIndex: 1,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        marginRight: 20,
    },

    text: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    btn: {
        top: 20,
        width: '60%',
        paddingRight: 80,
        borderTopLeftRadius:20,
        borderBottomLeftRadius: 20,
        height: 45,
        backgroundColor: '#3678eb',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginBottom: 20,
    },

    btntext: {
        width: 100,
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },

})

export default ExplanationScreen;