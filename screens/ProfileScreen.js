import React from 'react';
import { StyleSheet,
   Text, 
   View ,
   Button,
   } from 'react-native';
   const profileScreen =()=>{
       return(
           <View style={styles.container}>
               <Text>profileScreen</Text>
               <Button
               title="click Here"
               onPress={()=> alert('Button clicked!')}/>
           </View>
       );
   };
   export default profileScreen;
   const styles = StyleSheet.create({
       container:{
           flex:1,
           alignItems:'center',
           justifyContent:'center'
        },
    });