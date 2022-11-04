import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons, Entypo, FontAwesome5 } from "@expo/vector-icons"

import Inicio from "../screems/Inicio";
import Agendar_Tutoria from "../screems/Agendar_Tutoria";


const Tab = createBottomTabNavigator()

 
const MenuNavegacion = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName="Mis_Tutorias"
            screenOptions={{
                tabBarActiveTintColor: 'red',
                headerShown: false,
            }}
            >
                <Tab.Screen 
                name = "Mis_Tutorias" 
                component={Inicio}
                options = {{
                    tabBarLabel: 'Mis Tutorias',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="event" size={30} color={color} />
                    ),
                }}
                />
                <Tab.Screen 
                name = "Agendar_tutoria" 
                component={Agendar_Tutoria}
                options = {{
                    tabBarLabel: 'Agendar tutoria',
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="plus" size={30} color={color} />
                    ),
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );

}

export default MenuNavegacion