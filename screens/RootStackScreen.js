import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import splashScreen from './splashScreen';
import signinScreen from './signinScreen';
import signupScreen from './signupScreen';
import ExplanationScreen from './ExplanationScreen';
import mainTabScreen from './mainTabScreen';
import SpeechRecognition, {
    useSpeechRecognition
} from "react-speech-recognition";
import ExploreScreen from './PaymentScreen';





const RootStack = createNativeStackNavigator();

const RootStackScreen = ({navigation})=> {

  

return(

    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name=" " component={splashScreen}/>
        <RootStack.Screen name="About the App"  component={ExplanationScreen}/>
        <RootStack.Screen name="signinScreen" component={signinScreen}/>
        <RootStack.Screen name="Home" component={mainTabScreen}  options={{ headerShown: false }}/>
        <RootStack.Screen name="SignUp" component={signupScreen}/>
        <RootStack.Screen name="Pay" component={ExploreScreen}/>
    </RootStack.Navigator>

);
};

export default RootStackScreen;