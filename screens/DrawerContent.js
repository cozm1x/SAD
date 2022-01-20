import React from 'react';
import { 
    SafeAreaView,
    View ,
    StyleSheet,
    } from 'react-native';
import{
Avatar,
Title,
Caption,
Paragraph,
Drawer,
Text,
TouchableRipple,
Switch,
} from 'react-native-paper';
import{   
        DrawerContentScrollView,
        DrawerItem
} from '@react-navigation/drawer';
    
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { AuthContext } from '../components/context';

export function DrawerContent(props){

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
        
    const { signOut } = React.useContext(AuthContext);
        
    const toggleTheme =()=>{
        setIsDarkTheme(!isDarkTheme);
    }
    
    
    
        return(
            <SafeAreaView>
            <View style={{flex:1}}>
                <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop:15}}>
                            <Avatar.Image
                            source={{
                                uri:'https://media.istockphoto.com/photos/positive-mindset-positive-life-picture-id1272765753?b=1&k=20&m=1272765753&s=170667a&w=0&h=8Twyimx9TOKgr67OrabNA5sUeEgYT7ckM5HU6fnL5Ik='
                            }}
                            size={50}
                            />
                            <View style={{marginLeft:15,flexDirection: 'column'}}>
                                <Title style={styles.title}>Sarah Daniel</Title>
                            </View>
                        </View>
                        
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                    
                icon={           ({color,size})=>(<Icon name="home-outline" color={color} size={size}/>
                )}
                label="Home"
                onPress={() => {props.navigation.navigate('Home')}}
                />
                
                 {/* <DrawerItem
                icon={           ({color,size})=>(<Icon name="account-outline" color={color} size={size}/>
                )}
                label="profile"
                onPress={()=> {props.navigation.navigate('Profile')}}   
                />
                 <DrawerItem
                icon={           ({color,size})=>(<Icon name="bookmark-outline" color={color} size={size}/>
                )}
                label="Bookmark"
                onPress={() => {props.navigation.navigate('BookmarkScreen')}}
                /> */}
                 <DrawerItem
                icon={( {color,size})=>(<Icon name="settings" color={color} size={size}/>
                )}
                label="settings"
                onPress={() => {props.navigation.navigate('settingScreen')}}/>
                 <DrawerItem
                icon={           ({color,size})=>(<Icon name="account-check-outline" color={color} size={size}/>
                )}
                label="support"
                onPress={()=> {props.navigation.navigate('supportScreen')}}   />

                    </Drawer.Section>
                    <Drawer.Section title="preferences">
                        <TouchableRipple onPress={()=>{toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>
                                    Dark Themed
                                </Text>
                                <View pointerEvents="none">
                                <Switch value={isDarkTheme}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
                </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
     <DrawerItem
                icon={({color,size})=>(<Icon name="exit-to-app" color={color} size={size}/>
)}
                label="sign out"
                onPress={signOut}
                />

                    </Drawer.Section>    
                    </View>   
                    </SafeAreaView>
                     );
    }

    const styles=StyleSheet.create({
        drawerContent:{
            flex:1,
        },
        userInfoSection:{
            paddingLeft:20,
        },
        title:{
fontSize:16,
marginTop:3,
fontWeight: 'bold',
        },
        caption: {
fontSize:14,
lineHeight:14,
        },
        row:{
            marginTop:20,
            flexDirection: 'row',
            alignItems: 'center',
        },
        section: {
            flexDirection:'row',
            alignItems:'center',
            marginRight: 15,
        },
        Paragraph:{

            fontWeight: 'bold',
            marginRight:3,
        },
        drawerSection: {
            marginTop:15,
    
        },
        bottomDrawerSection:{
            marginBottom:15,
            borderTopColor:'#f4f4f4',
            borderTopWidth:1
        },
        preference:{
            flexDirection:'row',
            justifyContent: 'space-between',
            paddingVertical:12,
            paddingHorizontal:16,
        },

    });