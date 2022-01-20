import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { View, Text, ActivityIndicator, AsyncStorage, Button, Alert, StyleSheet } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
// import  mainTabScreen from './screens/mainTabScreen';
import {DrawerContent} from './screens/DrawerContent';
import supportScreen from './screens/supportScreen';
import settingScreen from './screens/SettingScreen';
import ExplanationScreen from './screens/ExplanationScreen';
import BookmarkScreen from './screens/BookmarkScreen';
import RootStackScreen from './screens/RootStackScreen';
import HomeScreen from './screens/HomeScreen';
import VerifiedPayScreen from './screens/VerifiedPayScreen';


import {Link, Route, } from 'react-router-native'

import { set } from 'react-native-reanimated';

import { AuthContext } from './components/context';
import { Users } from './model/user';
import ExploreScreen from './screens/PaymentScreen';
import mainTabScreen from './screens/mainTabScreen';

const Drawer = createDrawerNavigator();

 

const App =({navigation})=>{

 
  
  // const [userToken, setUserToken] = React.useState(null);

  // const intialLoginSate = {
  //   isLoading: true,
  //   email: null,
  //   userToken: null,
  // };

  // const loginReducer = (prevState, action) => {
  //   switch (action.type) {
  //     case 'RETRIEVE_TOKEN':
  //       return {
  //         ...prevState,
  //         userToken: action.token,
  //         isLoading: false,
  //       };

  //     case 'LOGIN':
  //       return {
  //         ...prevState,
  //         email: action.id,
  //         userToken: action.token,
  //         isLoading: false,
  //       };

  //     case 'LOGOUT':
  //       return {
  //         ...prevState,
  //         email: null,
  //         userToken: null,
  //         isLoading: false,
  //       };

  //     case 'REGISTER':
  //       return {
  //         ...prevState,
  //         email:action.id,
  //         userToken: action.token,
  //         isLoading: false,
  //       };

  //   }
  // };

  // const [loginState, dispatch] = React.useReducer(loginReducer, intialLoginSate);

  // const authContext = React.useMemo(() => ({
  //   signIn: async (foundUser) => {
  //     const userToken = String(foundUser[0].userToken);
  //     console.log(foundUser[0].name);
  //     const email = foundUser[0].email;

  //     try {
  //         await AsyncStorage.setItem('userToken', userToken);
  //     }
  //     catch(e) {
  //         console.log(e);
  //     }

  //     dispatch( {type: 'LOGIN', id: email, token: userToken } )
  //   },

  //   signOut: async() => {

  //     try {
  //       await AsyncStorage.removeItem('userToken');
  //     }
  //     catch(e) {
  //       console.log(e);
  //     }

  //     dispatch( {type: 'LOGOUT' });
  //   },

  //   signUp: () => {
  //     setUserToken('manny');
  //     setIsLoading(false);
  //   },

  // }), []);

  // useEffect (()=>{
  //   setTimeout(async() => {

  //     let userToken;
  //     userToken = null;

  //     try {
  //       userToken =  await AsyncStorage.getItem('userToken', userToken);
  //     }
  //     catch(e) {
  //       console.log(e);
  //     }

  //     dispatch( {type: 'REGISTER', token: userToken } );
  //   }, 1000);
  // }, []);


  // if( loginState.isLoading ) {
  //   return(
  //     <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
  //       <ActivityIndicator size='large' />
  //     </View>
  //   );
  // }


  return(

  <ExploreScreen />


  // <AuthContext.Provider value={authContext}>
  //   <NavigationContainer>

  //     {loginState.userToken !== null ? (

          
        
  //         <Drawer.Navigator drawerContent={props => <DrawerContent{...props} />}>
  //           <Drawer.Screen name="Home" component={HomeScreen} />
  //           <Drawer.Screen name="supportScreen" component={supportScreen} />
  //           <Drawer.Screen name="settingScreen" component={settingScreen} />
  //           <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />  
            
  //           {/* <Text style={styles.transcript}> Transcript: ${transcript} </Text>  */}
  //         </Drawer.Navigator> 

          
        
  //     )
  //     :
  //       <RootStackScreen/> 
  //     }

  //   </NavigationContainer> 
  // </AuthContext.Provider>



  

  );
}

  export default App;

  const styles = StyleSheet.create({
    transcript:{
        alignSelf:'center',
        bottom:0,
        padding:10,
        backgroundColor: "#fff",
     },
 });