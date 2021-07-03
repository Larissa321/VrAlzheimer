import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import { Card } from 'react-native-paper';
import {useNavigation} from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '../components/Header'
import { ButtonCinza, ButtonLaranja } from '../components/Button'

export default function CriarEvolucao(){
    const navigation = useNavigation(); 

    function handleStart(){
        navigation.navigate('Paciente')
    }

    return (
      <SafeAreaView style={estilo.conteiner}> 

        <Header/>    

        <View style={estilo.cardMaior}>  
          <Card style={estilo.cards}>  
            <TextInput
              style={estilo.inputBox}
              placeholder = 'Digite aqui'
              multiline
              numberOfLines={5}
            />
          </Card>
        </View>

        <View style={estilo.botao}>
          <ButtonCinza
          title={'Voltar'}
          onPress={handleStart}></ButtonCinza>
          <ButtonLaranja
          title={'Salvar'}
          onPress={handleStart}></ButtonLaranja>
        </View>
    
      </SafeAreaView>
    )
  }
  
  const estilo = StyleSheet.create({
    conteiner:{
      flex:1,
      backgroundColor:"#0091F2",
      alignItems:'center'
    },
    cardMaior:{
      width:'85%',
      justifyContent:'center'

    },
    cards:{
      fontSize: 25,
      height: '60%',
      borderRadius: 25,
      justifyContent:'space-between'
    },

    botao:{
      width:'90%',
      flexDirection:'row',
      justifyContent: 'space-evenly'
    },

    inputBox:{
      height:20,        
      margin: 20,
      justifyContent:'flex-start'
    },

    scrollview:{
      width: 320,
      height: 200
    }
  })
