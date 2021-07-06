import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '../components/Header'
import { ButtonCinza, ButtonLaranja } from '../components/Button'

export default function Registro(){
    const navigation = useNavigation(); 

    function handleStart(){
        navigation.navigate('EvolucaoAnte')
    }
    function handleStart2(){
        navigation.navigate('EvolucaoAnte')
    }

    return (
      <SafeAreaView style={style.conteiner}> 

        <Header/>  
        
        <Text style={style.texto}>Altura do passo</Text>
        <TextInput style={style.box}/>
            
        <Text style={style.texto}>Largura do passo</Text>
        <TextInput style={style.box}/>

        <Text style={style.texto}>Comprimento do passo</Text>
        <TextInput style={style.box}/>

        <Text style={style.texto}>Quantidade de passos</Text>
        <TextInput style={style.box}/>

        <Text style={style.texto}>Data</Text>
        <TextInput style={style.box}/>

        <View style={style.botao}>
          <ButtonCinza
          title={'Voltar'}
          onPress={handleStart}></ButtonCinza>
          <ButtonLaranja
          title={'Salvar'}
          onPress={handleStart2}></ButtonLaranja>
        </View>
    
      </SafeAreaView>
    )
  }
  
  const style = StyleSheet.create({
    conteiner:{
      flex:1,
      backgroundColor:"#0091F2",
      alignItems:'center',
      justifyContent:'space-between'
    },
    botao:{
      width:'90%',
      flexDirection:'row',
      justifyContent: 'space-evenly',
      marginBottom:20
    },

    box:{
      height:45,        
      width:'70%',
      backgroundColor:'white',
      borderRadius:10,
      fontSize:20

    },
    texto:{
        color:'white',
        fontSize:20,
        marginTop:5,
        marginLeft:5
    },
    scrollview:{
      width: 320,
      height: 200
    }
  })
