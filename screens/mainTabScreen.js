import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from  './HomeScreen';
import NotificationScreen from  './NotificationScreen';
import ExploreScreen from './PaymentScreen';
import profileScreen from './ProfileScreen';
  


const HomeStack = createNativeStackNavigator();
const NotificationsStack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const mainTabScreen =()=>(
    <Tab.Navigator >
    <Tab.Screen
      name="bean"
      component={HomeScreen}

    />
    {/* <Tab.Screen
      name="Profile"
      component={profileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor:'#009387',

         
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
          ),
        }}
    />
        <Tab.Screen
          name="Notifications"
          component={NotificationsStackScreen}
          options={{
            tabBarLabel: 'Notifications',
            tabBarColor:'#009387',
        
            tabBarIcon: ({ color }) => (
              <Icon name="ios-notifications" color={color} size={26} />
            ),
          }}
        />
    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: 'Transfer',
        tabBarColor:'#009387',
         
        tabBarIcon: ({ color }) => (
          <Icon name="ios-cash" color={color} size={26} />
        ),
      }}
    /> */}
  </Tab.Navigator>
);
export default mainTabScreen;

// const HomeStackScreen=({navigation})=>(
//     <HomeStack.Navigator>
//             <HomeStack.Screen name='Home' component={HomeScreen} />
            
//           </HomeStack.Navigator> 
    
//     );
//     const NotificationsStackScreen=({navigation})=>(
//       <NotificationsStack.Navigator screenOptions={{ headerStyle:{
//                   backgroundColor:'#009387',
//                 },
//                 headerTintColor:'#fff',
//                 headerTitleStyle:{
//                   fontWeight: 'bold',
//                 }
//                  }}>
//               <NotificationsStack.Screen name="Notifications  " component={NotificationScreen} options={{
//                 // headerLeft: () => (
//                 //   <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={()=>navigation.openDrawer()}></Icon.Button>
//                 // )
//               }} />
              
//             </NotificationsStack.Navigator> 
//     );