import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/Styles";

export const Boton = (props) =>{

    const {onPress, text, op} = props

    if (op == "1") {
    
        return(
            <TouchableOpacity style = { styles.containerBoton_1 }
                onPress = {onPress}
            >
                <Text style = {styles.containerTextBoton}>
                    {text}
                </Text>           
            </TouchableOpacity>
        )


    } else if(op == "2"){

        return(
            <TouchableOpacity style = { styles.containerBoton_2 }
                onPress = {onPress}
            >
                <Text style = {styles.containerTextBoton}>
                    {text}
                </Text>           
            </TouchableOpacity>
        )
        
    }else if(op == "3"){

        return(
            <TouchableOpacity style = { styles.containerBoton_3 }
                onPress = {onPress}
            >
                <Text style = {styles.containerTextBoton}>
                    {text}
                </Text>           
            </TouchableOpacity>
        )

    }

}