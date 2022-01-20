import React from 'react';
import { StyleSheet,
   Text, 
   View ,
   Button,
   ScrollView,
   SafeAreaView
   } from 'react-native';
   
const NotificationScreen = ({navigation}) =>{
  
    return (
      <View style={styles.container } >

        <ScrollView>
          {/* space for notifications */}
        </ScrollView>
        
      </View>
  
    );
  
  };
  export default NotificationScreen;

  
  const styles = StyleSheet.create({
    container:{ 
      backgroundColor: '#fff',
      flex: 1,
     },
  });