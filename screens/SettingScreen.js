import React,  {useState} from 'react';
import { StyleSheet,
   Text, 
   View ,
   Button,
   TouchableOpacity,
   Switch,
   Image,
   SafeAreaView
   } from 'react-native';
   import Icon from 'react-native-vector-icons/Ionicons';
   import {Picker} from '@react-native-picker/picker';



const settingScreen =()=>{
const [selectedLanguage, setSelectedLanguage] = useState();
const [selectedFsize, setSelectedFsize] = useState();


    const color = "#a09c9c";



    return (
      
    <View style={styles.background}>

        <View style={styles.toppart}>
        <Text style={styles.title}>Settings</Text>
        </View>

        <View style={styles.bottompart}>

                <View style={styles.container} >

                <View>

                    <View accessible={true}
                        accessibilityLabel='language'
                        accessibilityHint='Select the language of your choice'
                         style={styles.row}>
                        <Icon style={styles.icon} name="ios-globe"  color={color} size={24} />
                        <Text style={{fontSize:15, fontWeight:'bold'}}>Language </Text>
                        <Picker
                        style={styles.picker}
                        mode='dialog'
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                          setSelectedLanguage(itemValue)
                        }>
                        <Picker.Item style={styles.pickeritem} label="English" value="en"  />
                        <Picker.Item style={styles.pickeritem} label="French" value="fr" />
                        <Picker.Item style={styles.pickeritem} label="Pidgin" value="pd" />
                        </Picker>
                    </View>

                    <View accessible={true}
                        accessibilityLabel='Color Theme'
                        accessibilityHint='Select the theme that better aids your vision or that you prefer'
                         style={styles.row} style={styles.row}>
                        <Icon style={styles.icon} name="ios-color-palette"  color={color} size={24} />
                        <Text style={{fontSize:15, fontWeight:'bold'}}>Colour Theme</Text>
                    </View>

                    <View accessible={true}
                        accessibilityLabel='Font Size'
                        accessibilityHint='Select a font size that is more legible to you'
                         style={styles.row} style={styles.row}>
                        <Icon style={styles.icon} name="ios-text"  color={color} size={24} />
                        <Text style={{fontSize:15, fontWeight:'bold'}}>Font Size </Text>
                        <Picker
                        style={styles.picker}
                        mode='dialog'
                        selectedValue={selectedFsize}
                        onValueChange={(itemValue, itemIndex) =>
                          setSelectedFsize(itemValue)
                        }>
                        <Picker.Item style={styles.pickeritem} label="Normal" value="nrm"  />
                        <Picker.Item style={styles.pickeritem} label="Large" value="lrg" />
                        </Picker>
                    </View>

                    <View accessible={true}
                        accessibilityLabel='Reminders'
                        accessibilityHint='Select if you would like to recieve regular summary notifications'
                         style={styles.row} style={styles.row}>
                        <Icon style={styles.icon} name="ios-notifications"  color={color} size={24} />
                        <Text style={{fontSize:15, fontWeight:'bold'}}>Summary Notification </Text>
                        
                    </View>

                    <TouchableOpacity accessible={true}
                        accessibilityLabel='security'
                        accessibilityHint='change login password'
                         style={styles.row} style={styles.row}>
                        <Image style={styles.imgicon} source= {require('../assets/secured.png')} />
                        <Text style={{fontSize:15, fontWeight:'bold'}}>Security </Text>
                    </TouchableOpacity>

                </View> 

                </View>
        </View>
    </View>
    );
};


const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#179787',
  },

toppart: {
      flex:0.2,
      alignItems: 'center',
      justifyContent: 'center',
     zIndex: 0,
  },

  bottompart: {
      flex: 1.2,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      padding: 20,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      zIndex:1,
  },

  title: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
    flex: 0.1,
    marginTop: 10,
  },

  container: {
    flex: 1,
    alignSelf: 'center',
    justifySelf: 'center',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    marginBottom: 10,
    width: '100%',
    height: 70,
    borderRadius: 10,
    backgroundColor: '#e5e5e5'
  },

  imgicon: {
    width: 30,
    height: 25,
    marginLeft:5,
    marginRight: 20,
  },

  icon: {
    paddingRight: 15,
  },

  picker: {
    borderWidth: 0,
    fontSize: 15,
    marginLeft: 25,
    padding: 5,
    borderRadius: 5,
  },

  pickeritem: {
    fontSize: 14,
  },

})

   export default settingScreen;
