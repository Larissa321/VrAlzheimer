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
import { ButtonCinza } from '../components/Button'

export default function EvolucaoAnte(){
    const navigation = useNavigation(); 

    function handleStart(){
        navigation.navigate('Registro')
    }

    return (
      <SafeAreaView style={style.conteiner}> 

        <Header/>  
        
        <Text style={style.texto}>Data: dd/mm/aaaa</Text>
        <View style={style.box}>
            <Text>      Lorem ipsum bla bla bla bla</Text>
        </View>
        <Text style={style.texto}>Data: dd/mm/aaaa</Text>
        <View style={style.box}>
            <Text>      Lorem ipsum bla bla bla bla</Text>
        </View>

        <View style={style.botao}>
          <ButtonCinza
          title={'Voltar'}
          onPress={handleStart}></ButtonCinza>
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
      height:'15%',        
      width:'85%',
      backgroundColor:'white',
      borderRadius:20,
      fontSize:20
    },
    texto:{
        color:'white',
        fontSize:20,
        marginTop:5
    },
    scrollview:{
      width: 320,
      height: 200
    }
  })
