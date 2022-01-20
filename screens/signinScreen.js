import React from 'react';
import{
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
    Platform,
    TouchableOpacity,
    Alert
}from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Users } from '../model/user';

import { AuthContext } from '../components/context';


const signinScreen =({navigation})=>{

    const [data,setData]= React.useState({
        email:'',
        password:'',
        check_textInputChange: false,
        secureTextEntry:true,
        isValidEmail: true,
        isValidPassword: true,
    });

    const { signIn } = React.useContext(AuthContext);

    const textInputChange=(val)=>{
        if(val.trim().length >= 8){
            setData({
                ...data,
                email:val,
                check_textInputChange:true,
                isValidEmail: true
            });
        }else{
            setData({
                ...data,
                email:val,
                check_textInputChange:false,
                isValidEmail: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if(val.trim().length >= 8){
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        }

        else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const UpdateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidEmail = (val)=> {
        if (val.length >= 8){
            setData({
                ...data,
                isValidEmail: true
            });
        }

        else {
            setData({
                ...data,
                isValidEmail: false
            });
        }
    }

    const loginHandle =(Email, password) => {

        const foundUser = Users.filter( item => {
            return Email == item.email && password == item.password;
        } );

        
        if (data.email.length == 0 && data.password.length == 0){
            Alert.alert('Wrong Input!', 'Email or password field cannot be empty.' ,[
                {text: 'Okay'}
            ]);
            return;
        }

        if (foundUser.length == 0){
            Alert.alert('Invalid User!', 'Email or password is incorrect. ' ,[
                {text: 'Okay'}
            ]);
            return;
        }

        signIn(foundUser);
    }


    return(

        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.text_header}>
                LOGIN
            </Text>
            </View>


            <Animatable.View animation="fadeInUpBig">
            <View style={styles.footer}>
            <Text style={styles.text_footer}>
                Email
            </Text>
            <View style={styles.action}>
                <FontAwesome
                name="user-o"
                color="#05375a"
                size={20}/>
    <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText = {(val)=>textInputChange(val)}
            onEndEditing={(e) => handleValidEmail(e.nativeEvent.text) }
            />
            {data.check_textInputChange ?
            <Feather
            name="check-circle"
            color="green"
            size={20}/>
            : null}
            </View>
            { data.isValidEmail ? null :
            <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Email must be in a valid address format</Text>
            </Animatable.View>
            }

            <Text style={styles.text_footer,{marginTop: 35}}>password</Text>
            <View style={styles.action}>
                <FontAwesome
                name="lock"
                color="#05375a"
                size={20}/>
<TextInput
            placeholder="Your password"
            secureTextEntry={true}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val)=>handlePasswordChange(val)}
            />
            <Feather
            name="eye-off"
            color="grey"
            size={20}/>
            </View>
            { data.isValidPassword ? null :
            <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Password must be 8 characters long</Text>
            </Animatable.View>
            }
           

            <TouchableOpacity>
                <Text style={styles.forgotbtn}>Forgot Password? </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginbtn} 
                onPress={() => {loginHandle(data.email, data.password)}}>
                <Text style={styles.logintext}>LOGIN</Text>
            </TouchableOpacity>

            <View style={styles.row}>
                <Text style={{marginLeft: 30,}}> Don't have an account yet?</Text>

                <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
                    <Text style={styles.signup}> Sign Up</Text>
                 </TouchableOpacity>
            </View>
            
            </View>
        </Animatable.View>
        </View>
    );
};
export default signinScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#40caa8'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    forgotbtn: {
        height: 30,
        marginTop: 20,
        marginBottom: 20,
        fontWeight: '500',
        alignSelf: 'center', 
    },

    loginbtn: {
        width: '85%',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3678eb',
        alignSelf: 'center', 
    },

    logintext: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff'
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 35,
        
    },

    signup: {
        marginLeft: 15,
        fontWeight: 'bold',
    },

  });
