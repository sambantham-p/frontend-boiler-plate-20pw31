import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home'
import Seedphrase from './Seedphrase';
import {View,Text} from 'react-native';
import { StyleSheet } from 'react-native';
import Address from './Address';

const Stack = createStackNavigator();


const CypherStack = () => {
  return(
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({navigation}) => ({
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'gold' },
          })}
        
        />
        <Stack.Screen 
            name="Seedphrase" 
            component={Seedphrase} 
              options={({navigation}) => ({
              headerTintColor: 'white',
              headerStyle: { backgroundColor: 'gold' },
            })}
        />
        <Stack.Screen 
            name="Address" 
            component={Address} 
              options={({navigation}) => ({
              headerTintColor: 'white',
              headerStyle: { backgroundColor: 'gold' },
            })}
        />
      </Stack.Group> 
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <CypherStack/>
    </NavigationContainer>
  );
}
