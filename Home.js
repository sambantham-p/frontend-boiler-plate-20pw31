import { useNavigation } from '@react-navigation/native';
import React,{ useEffect } from 'react';
import { StyleSheet, View, Text, StatusBar, Image ,Button} from 'react-native';


export default function Home () {
    const navigation = useNavigation()
    return(
      <View style={styles.head}>
          <Text style={styles.font}>Get the world 's first non- custodial cypher card</Text>
          <View style={styles.nav}>
            <Text style={styles.navText}>Explore all of Web3 in one place</Text>
            <View style={styles.content}>
              <View style={styles.buy}>
                  <Image source={require('./assets/swap.png')}/>
              </View>
              <View style={styles.footer}>
                <Button 
                      title="CREATE NEW WALLET"
                      color="gold"
                      onPress={ () => navigation.navigate('Seedphrase')}
                      accessibilityLabel="Learn more about this purple button"/>
              </View>
            </View>
          </View>
          
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    bannerImage: {
      width: '100%',
      height: '20%',
      resizeMode: 'contain'
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center'
    },
    mainText: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    helpText: {
      fontSize: 16,
      textAlign: 'center',
      marginTop: 10
    },
    hintText: {
      fontSize: 16,
      textAlign: 'center',
      marginTop: 15
    },
    font :{
        fontSize: 22,
        paddingLeft: 55,
        paddingTop: 35,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    navText:{
      alignItems: 'center',
    },
    head :{
      top: 15,
    },
    nav:{
       top : 25,
       left: 55
    },
    footer:{
      top: 400,
      left : -80,
      width: 220
    },
   
  });
