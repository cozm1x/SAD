import React from 'react';
import { View, StyleSheet, Image, Text, TextInput,  } from 'react-native';

function VerifiedPayScreen(props) {
    return (
        <View style={styles.container} >
            <Image source={require('../assets/blob-scene-haikei.png')} style={{width: "100%", height: "100%", position: 'absolute', zIndex:0, opacity:'40%',}}  />
        </View>
    );
}

export default VerifiedPayScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        marginTop: 10,
        marginBottom: 10,
    },

    
})