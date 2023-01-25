import React from 'react';
import Seedpharse from './Seedphrase';
import {View,StyleSheet,Text} from "react-native"
var bip39 = require('bip39') 
const add = bip39.mnemonicToSeedSync('basket actual').toString('hex')
const Address = () =>{
    <View style={styles.sty}>
        <Text>{add}</Text>
    </View>
}
const styles = StyleSheet.create({
})
export default Address;