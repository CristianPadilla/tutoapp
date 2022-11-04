import React from 'react'
import { Text, View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Boton } from '../components/Boton'
import { styles } from '../styles/Styles'

const Inicio = ({ navigation }) => {
    
    
    return(
        <SafeAreaView style={styles.containerPrincipal}>
            <View style = {styles.containerSecundario}>
                <Text>Calendario</Text>
            </View>
            <View style = {styles.containerSecundario}>
                <Text style = {styles.textSubTitle}>Tutor</Text>
            </View>
            <View style = {styles.containerSecundario}>
                <Text>se coloca al tutor de la fecha seleccionada</Text>
            </View>
            <View style = {styles.containerSecundario}>
                <Boton 
                op = "3"
                text = "Cancelar Tutoria"
                onPress = {()=>{
                    alert("Seguro de cancelar la tutoria")
                }}
                />
            </View>
        </SafeAreaView>
    )
}


export default Inicio