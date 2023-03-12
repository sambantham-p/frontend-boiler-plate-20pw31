import {View,StyleSheet,Text} from "react-native"
import React,{useState} from "react"
let bip39 = require('bip39') 
export default function Address(){
    let [add,setAdd] = useState();
    return(
    <View style={styles.sty}>
        <Text onChange = {(add) => setAdd(add)}>{add}</Text>
    </View>
    )
}
const styles = StyleSheet.create({
})
