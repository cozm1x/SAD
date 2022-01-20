import React from 'react';
import { StyleSheet,
   Text, 
   View ,
   Button,
   } from 'react-native';
   const supportScreen =()=>{
       return(
           <View style={styles.container}>
               <Text>supportScreen</Text>
               <Button
               title="click Here"
               onPress={()=> alert('Button clicked!')}/>
           </View>
       );
   };
   export default supportScreen;
   const styles = StyleSheet.create({
       container:{
           flex:1,
           alignItems:'center',
           justifyContent:'center'
        },
    });