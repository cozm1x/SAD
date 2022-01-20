
import React, {useState} from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { initialWindowMetrics } from 'react-native-safe-area-context';


const ExploreScreen =()=>{

    const [accountnum, setAccountnum] = useState("");
    const [tamount, setTamount] = useState("");
    const [accountname, setAccountname] = useState("");
    const [bank, setBank] = useState("");
    const [recipientcode, setRecipientcode] = useState("");

    const account_name = "ben"

    const verify = (accountnum,bank) => {
        fetch(`https://api.paystack.co/bank/resolve?account_number=${accountnum}&bank_code=${bank}`, {
          "method": "GET",
          "headers": {
              'Authorization': 'Bearer sk_test_73776e8c63cf1e755e3c53aed5e42b327aeacef6'
          }
        })
        
        .then(response => response.json())
  
        .then((responseJson) => {
          console.log(responseJson);
          this.responseJson.data.account_name = setAccountname(accountname);
          message  = responseJson.message;
      })
      
        .catch((error) => {
            console.log(error);
        });
    }

    const  create = (account_name, accountnum, bank) => {

        const data = {
            type: "nuban",
            name: bank,
            description: "Zombier",
            account_number: accountname,
            bank_code: accountnum,
            currency: "NGN",
        };

        fetch(`https://api.paystack.co/transferrecipient`, {
            "method": "POST",
            "headers": {
                'Authorization': 'Bearer sk_test_73776e8c63cf1e755e3c53aed5e42b327aeacef6',
                'Content-Type': 'application/json',
            },
            "body": JSON.stringify(data)

          })
          
          .then(response => response.json())
    
          .then(responseJson => {
            console.log(responseJson);
            this.responseJson.data.recipient_code = setRecipientcode(recipientcode);
        })
        
        .catch((error) => {
            console.log(error);
            console.log(account_name,accountnum,bank);
      });

    }

    const r = "RCP_t0ya41mp35flk40";

    const start_transfer=(tamount,recipientcode)=>{

        const data = {
            source: "balance", 
            amount: tamount, 
            recipient: recipientcode, 
            reason: "For the Daily bread" 
        };

        fetch(`https://api.paystack.co/transfer`, {
            "method": "POST",
            "headers": {
                'Authorization': 'Bearer sk_test_73776e8c63cf1e755e3c53aed5e42b327aeacef6',
                'Content-Type': 'application/json',
            },
            "body": JSON.stringify(data)

          })
          
          .then(response => response.json())
    
          .then(responseJson => {
            console.log(responseJson);
            if (responseJson.status == false){
                alert(" Your Transfer Sucessful");
              }
        })
        
        .catch((error) => {
            console.log(error);
            alert("Transfer Sucessful");
            
      });


    }

    const process_transfer=(account_name,accountnum,bank,tamount,recipientcode)=>{
        verify(accountnum,bank);
        create(account_name,accountnum,bank);
        start_transfer(tamount,recipientcode);
    };
  


return(

    <View style={styles.background}>

        <ScrollView>
            <Text style={styles.title}>Payment</Text>

            <View style={styles.container} >
                    <Text style={styles.info}>Enter Payment Details</Text> 

                    <View style={styles.inputholder} >
                    <TextInput 
                    style={styles.textinput} 
                    placeholder='Account Number'
                    onChangeText={(accountnum) => setAccountnum(accountnum)} />
                    </View>
                    
                    <View>
                    <Picker
                        style={styles.paypicker} 
                        mode='dialog'
                        selectedValue={bank}
                        onValueChange={(itemValue, itemIndex) => {
                            setBank(itemValue);
                            console.log(itemValue);
                        }
                        }>
                         <Picker.Item style={styles.pickeritem} label="Beneficiary BANK" value= ""  />
                        <Picker.Item style={styles.pickeritem} label="AccessBank" value="044" />
                        <Picker.Item style={styles.pickeritem} label="ECOBank" value= "050"  />
                        <Picker.Item style={styles.pickeritem} label="Fidelity Bank" value="070" />
                        <Picker.Item style={styles.pickeritem} label="First Bank" value="011" />
                        <Picker.Item style={styles.pickeritem} label="GTBank" value="058" />
                        <Picker.Item style={styles.pickeritem} label="Jaiz Bank" value= "301"  />
                        <Picker.Item style={styles.pickeritem} label="Stanbic IBTC" value="039" />
                        <Picker.Item style={styles.pickeritem} label="Union Bank" value="032" />
                        <Picker.Item style={styles.pickeritem} label="UBA" value="033" />
                        <Picker.Item style={styles.pickeritem} label="Zenith Bank" value="057" />
                        </Picker>
                    </View>

                    <View style={styles.inputholder} >
                    <TextInput 
                    style={styles.textinput} 
                    placeholder='Amount in Naira'
                    onChangeText={(tamount) => setTamount(tamount)} />
                    </View>

                    {/* <View style={styles.inputholder} >
                    <TextInput 
                    style={styles.textinput} 
                    placeholder='Enter Secure Code'
                    onChangeText={(code) => setCode(code)} />
                    </View> */}

                    <TouchableOpacity style={styles.confirmbtn}  onPress={() => process_transfer }>
                        <Text style={styles.confirmtext}>CONFIRM PAYMENT</Text>
                    </TouchableOpacity>

            </View>

            </ScrollView>
    </View>
       );
   };


const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#40caa8',
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 10,
        marginLeft: 20,
        flex: 0.1,
    },

    info: {
        fontSize: 18,
        fontWeight: '500', 
        alignSelf: 'flex-start',
        marginTop: 20,
    },

    container: {
        width: '90%',
        alignSelf: 'center',
        justifySelf: 'center',
        justifyContent: 'flex-end',
        top: 25,
        alignItems: 'center',
        padding: 20,
        paddingBottom: 40,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius:25,
        flex: 0.9,
    },

    inputholder: {
        backgroundColor: '#e3e7eeb6',
        height: 60,
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 10,
    },

    paypicker :{
        marginTop: 30,
        paddingTop: 25,
        paddingBottom: 25,
        paddingLeft: 10,
        paddingRight: 70,
        alignSelf: 'flex-start',
        backgroundColor: '#e3e7eeb6',
        borderRadius: 10,
        border: 0,
        fontSize: 15,
    },

    pickeritem : {
        fontSize: 15,
    },

    textinput: {
        flex: 1,
        padding: 20,
        fontSize: 16,
    },

    confirmbtn: {
        alignSelf: 'center',
        top: 50,
        width: '65%',
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3678eb',
        marginBottom: 50,
    },

    confirmtext: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff'
    },
}) 


export default ExploreScreen;