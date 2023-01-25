import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Seedpharse from './Seedphrase';
import {View,StyleSheet,Text,Button} from "react-native"
var bip39 = require('bip39') 

const mnemonic = bip39.generateMnemonic()

const Seedphrase = () =>{
    const navigation = useNavigation()
    return(
        <View style={styles.head}>
            <View style={styles.sec_nav}>
                <Text style={styles.sec_navText}>
                Your Seed Phrase makes it easy to back up and restore your account </Text>
                <View style={styles.Warning}>
                    <Text style={styles.Warntext}>WARNING: Never disclose your Secret Recovery Phrase. Anyone with this phrase can take your assets forever</Text>
                    <Text>{mnemonic}</Text>
                </View>
                <View style={styles.footer}>
                    <Button 
                        title="CONFIRM"
                        color="gold"
                        onPress={ () => navigation.navigate('Address')}
                        accessibilityLabel="Learn more about this purple button"/>
              </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    sec_navText :{
        fontSize: 17,
        Left:2,
        paddingTop: 25,
        fontFamily: 'Helvetica Neue',
    },
    head :{
      top: 15,
    },
    sec_nav:{
       top : 25,
       left: 25,
       alignItems: 'center',
    },
    Warning:{
        top: 28,
    },
    Warntext:{
        fontSize: 13,
        alignItems: 'center',
    },
    footer:{
        top: 400,
        left : -80,
        width: 220
    },

})
export default Seedphrase;