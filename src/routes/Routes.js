import React from 'react'
import Inicio from '../screems/Inicio'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

 
const Navegacion = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Inicio'
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Inicio" component={Inicio}/>
            </Stack.Navigator>
        </NavigationContainer>  
    );
}


export default Navegacion