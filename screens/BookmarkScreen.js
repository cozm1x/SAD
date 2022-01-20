import React from 'react';
import { StyleSheet,
   Text, 
   View ,
   Button,
   } from 'react-native';
   const BookmarkScreen =()=>{
       return(
           <View style={styles.container}>
               <Text>BookmarkScreen</Text>
               <Button
               title="click Here"
               onPress={()=> alert('Button clicked!')}/>
           </View>
       );
   };
   export default BookmarkScreen;
   const styles = StyleSheet.create({
       container:{
           flex:1,
           alignItems:'center',
           justifyContent:'center'
        },
    });