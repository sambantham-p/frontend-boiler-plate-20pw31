import React from 'react';
import {View,StyleSheet,Text} from "react-native"
import {useState} from "react"
var bip39 = require('bip39') 

export default function Address(){
    let [add,setAdd] = useState();

    add = bip39.mnemonicToSeedSync('basket actual').toString('hex')
    return(
    <View style={styles.sty}>
        <Text>{add}</Text>
    </View>
    )
}
const styles = StyleSheet.create({
})
