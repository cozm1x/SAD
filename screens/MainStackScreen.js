import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import ExplanationScreen from './ExplanationScreen';
import HomeScreen from './HomeScreen';
import SpeechRecognition, {
    useSpeechRecognition
} from "react-speech-recognition";
import ExploreScreen from './PaymentScreen';





const MainStack = createNativeStackNavigator();


const MainStackScreen = ({navigation})=> {

    const { transcript } = useSpeechRecognition({ commands });

    const [pageChange, setPageChange] = useState("");
  
    const commands = [
      {
        command: ["Open *"],
        callback: switchedPage => setPageChange(switchedPage),
      }
    ]
  
    console.log(switchedPage);
  
    const pages = ["home","settings","transfer"]
    const links = {
      home: "Home",
      settings: "Settings",
      tranfer: "Transfer",
    }
  
    if (pageChange) {
      if(pages.includes(pageChange)) {
        navigation.navigate( links[pageChange]);
      }
      else {
        Alert.alert('could not find screen: ${ pageChange }')
      }
    }
  
    useEffect(() => {
      SpeechRecognition.startListening({ continuous: true });
      console.log("Now listening...");
      return () => {
        SpeechRecognition.stopListening();
        console.log("Stopped Listening");
      };
    }, []);
  
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      return null
    }

    return (
        
        <MainStack.Navigator headerMode='none'>
            <MainStack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }}/>
            <MainStack.Screen name="Transfer" component={ExploreScreen}/>
        </MainStack.Navigator>
        
    );
};

export default MainStackScreen;