import React from 'react';
import { StyleSheet,
   Text, 
   View ,
   Button,
   TouchableOpacity,
   AsyncStorage,
   SafeAreaView,
   ScrollView,
   FlatList,
   Image

} from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import ExploreScreen from './PaymentScreen';
import { Users } from '../model/user';


const HomeScreen = ({navigation}) =>{

  const [info, setInfo] = React.useState({
      name: '',
  });

  const name = 'Sarah Daniel'

  console.log(info.name)

    return (
        <View style={styles.container} >
          <Image source={require('../assets/blob-scene-haikei.png')} style={{width: "100%", height: "100%", position: 'absolute', zIndex:0, opacity:'40%',}}  />


          <View>
          <Image source={require('../assets/stacked-peaks-haikei.png')} style={{ width:'85%', height: 160, position: 'absolute', zIndex: 0, top: 20, left:25, borderRadius: 10,}}/>
          <TouchableRipple style={styles.welcome} onPress={()=> console.log('tap')}>
            <View >
              <Text style={{fontSize: 19, fontWeight:'bold', margin: 10, color:'#fff'}}>Welcome back, {name}</Text>
              <Text style={{fontSize: 15, fontWeight:'bold', margin: 10, alignSelf: 'flex-start', color:'#fff', position: 'absolute', left:10, top: 110,}}>xxxx-xxxx-1234</Text>
            <Image source={require('../assets/mastercard.png')} style={{width:50, height: 40, position: 'absolute', bottom:10, right:20, }}  />
            </View>
          </TouchableRipple>
          </View>


          <ScrollView>
            <View style={styles.choicebox}>

              <TouchableOpacity style={[styles.choice, styles.spacedown,{backgroundColor:'blue'}]} onPress={()=> props.navigation.navigate('Pay')}>
                  <Text style={{alignSelf: 'center', color: '#fff', fontSize: 20, fontWeight: 'bold',}}>TRANSFER</Text>
              </TouchableOpacity>

              {/* <TouchableOpacity style={[styles.choice, styles.spacedown,{backgroundColor:'yellow'}]} onPress={()=>navigation.navigate('SignUp')}>
                <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: 'bold',}}>SUBSCRIPTION</Text>
              </TouchableOpacity> */}

            </View>

            <View>
              <Text style={{fontSize: 19, fontWeight:'bold', marginTop: 20, marginLeft:30}}>Recents</Text>
              <View style={{width: '80%', height: 1, backgroundColor: '#000',marginLeft:30,}}/>
              {/* <FlatList
                data={}  
                ItemSeparatorComponent={} 
              /> */}

              <View style={{marginBottom: 30,}}>
                <View style={styles.notification}>
                  <Text style={{fontWeight:'bold', width:'90%', marginLeft: 10,}}>A transfer of 350.00 naira was made to JOHN DOE, 1000000012 ...</Text>
                  <Text style={{position:'absolute', right:10, bottom:10,}}>11:34</Text>
                </View>
                
                <View style={styles.notification}>
                  <Text style={{fontWeight:'bold', width:'90%', marginLeft: 10,}}>A transfer of 15000.00 naira was made to JANE DEEP, ...</Text>
                  <Text style={{position:'absolute', right:10, bottom:10,}}>08:05</Text>
                </View>

                <View style={styles.notification}>
                  <Text style={{fontWeight:'bold', width:'90%', marginLeft: 10,}}>A transfer of 50.00 naira was made to SALIM MUSA, ...</Text>
                  <Text style={{position:'absolute', right:10, bottom:10,}}>20:22</Text>
                </View>
                
              </View>
            </View>
          </ScrollView>
        
        </View>
  
  );
  
  };
  export default HomeScreen;


  const styles=StyleSheet.create({
      container:{
        flex:1,
        backgroundColor: '#fff',
      },

      welcome: {
        borderWidth: 2,
        borderColor: '#000',
        width: '85%',
        height: 160,
        borderRadius: 10,
        shadowColor: '#fff',
        alignSelf: 'center',
        margin: 20,
      },

      choicebox: {
        marginTop: 10,
        width: '80%',
        height: '100',
        alignSelf: 'center',
        flexWrap: 'wrap',
      },

      choice: {
        width: '100%',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#000',
        height: 95,
        justifyContent: 'center',
        alignContent: 'center',
      },

      spacedown: {
        marginBottom: 20,
      },

      spaceside: {
        marginRight: 20,
      },

      notification:{
        width: '84%',
        height: 70,
        borderStyle: 'solid',
        borderColor: '#000',
        borderWidth:1,
        alignSelf:'center',
        marginTop: 15,
        marginBottom: 5,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius:5,
      }
  });