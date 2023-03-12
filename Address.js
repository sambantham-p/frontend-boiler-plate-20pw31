import {View,StyleSheet,Text} from "react-native"
import React,{useState} from "react"
let bip39 = require('bip39') 
let [add,setAdd] = useState();
export default function Address(){
   
    setAdd = bip39.mnemonicToSeedSync('basket actual').toString('hex')
    return(
    <View style={styles.sty}>
        <Text>{add}</Text>
    </View>
    )
}
const styles = StyleSheet.create({
})
