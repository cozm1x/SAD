import React from 'react';
import{
    View,
    Text,
    Button,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Image,
    SafeAreaView
}from 'react-native';
//mport LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';

const splashScreen =({navigation})=>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image 
                 animation="bounceIn"
                duration={1500}
                source={require('../assets/famza.jpeg')}
                style={styles.logo}
                resizeMode="stretch"/>
                <Text style={{color:'#fff', },styles.title}>Famza Aid</Text>
                
            </View>

            <Animatable.View 
            style={styles.footer}
            animation="fadeInUpBig">
                
                
                   
            
    <TouchableOpacity >
    <Button onPress={()=>navigation.navigate('About the App')}
         
         title = "Get started!"
         color = "#009688"
         backgroundColor="#009688"
        
    />
    </TouchableOpacity>

                
            </Animatable.View>
        </View>
    );
};

export default splashScreen;
const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#40caa8'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      borderBottomRightRadius: 30,
      borderBottomLeftRadius: 30,
  },
  title: {
      fontSize: 30,
      fontWeight: 'bold',
      paddingTop: 20,
  },
  text: {
      color: '#fff',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30,
     
      width:90,
      borderRadius: 50,
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#009688",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }

});


    