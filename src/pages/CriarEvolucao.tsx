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

export default function CriarEvolucao(){
    const navigation = useNavigation(); 

    function handleStart(){
        navigation.navigate('Paciente')
    }

    return (
      <View style={estilo.telaPrincipal}>
        <LinearGradient
          colors={['rgba(2, 54, 88, 0.4)', '#0091F2']}
          style={{
            position: 'absolute',
            top: 62,
            left: 0,
            width: 360,
            height: 578,
          }}
        />
        <View style={estilo.telaTitulo}>
          <Text style={estilo.usuario}>EVOLUÇÃO</Text>
        </View>

        <Card style={estilo.cards}>  
          <TextInput
            keyboardType = 'numeric'
            placeholder = 'Digite aqui'
            autoCapitalize = 'none'
            style={estilo.inputBox}
            multiline
            numberOfLines={4}
          />
        </Card>
      
        <View style={estilo.Container}>
          <View>
            <TouchableOpacity
              style={estilo.voltar}
              onPress={handleStart}>
              <Text style={estilo.voltarTexto}>VOLTAR</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={estilo.salvar}
              onPress={handleStart}>
              <Text style={estilo.salvarTexto}>SALVAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
  
  const estilo = StyleSheet.create({
    Container:{
      flex:1,
      //width:100,
      height:38, 
      flexDirection: 'row',
      alignItems:'baseline',
      //justifyConten:'space-evenly'
    },

    telaPrincipal:{
      //flex: 1,
      //alignItems: 'center',
    },

    salvar:{
      width: '80%',
      height: 38,
      backgroundColor: '#E59021',
      //marginTop: 10,
      //marginBottom: 5,
      //marginLeft: 10,
      //alignItems: 'center',
      borderRadius: 25
    },

    voltar:{
      //marginTop: 10,
      //left: 20,
      width:'80%',
      height: 38,
      //marginLeft: -10,
      backgroundColor: '#81BEF7',
      //alignItems: 'center',
      borderRadius: 25
    },

    voltarTexto:{
      fontSize: 18,
      color:'#FFFFFF',
      left: 64,
      width: 64,
      height: 24,
      //alignItems: 'center'
    },

    salvarTexto:{
      fontSize: 18,
      color:'#FFFFFF',
      left: 70,
      width: 64,
      height: 24
      
    },

    inputBox:{
      //flat : 'focused',
      borderBottomWidth: 10,
      borderBottomColor: 'white',
      height:210,        
      margin: 20,
      marginBottom: 0,
    },

    input:{
      margin: 20,
      marginBottom: 0,
      height: 34,
      paddingHorizontal: 10,
      borderRadius: 4,
      borderColor: '#ccc',
      borderWidth: 1,
      fontSize: 16,
    },

    telaTitulo:{
    backgroundColor: '#014573',
    top: 0,
    left: 0,
    width: 360,
    height: 62,
    //flexDirection:'column', alignItems:'stretch', justifyContent:'flex-start'
    },

    cards:{
    fontSize: 25,
    marginLeft: 10.5,
    width: 300,
    height: 250,
    marginBottom: 150,
    marginTop: 60,
    borderRadius: 25,
    justifyContent:'space-between'
    },

    usuario:{
      fontSize: 26,
      color:'white',
      top: 13,
      left: 115,
      width: 130,
      height: 35,
      //alignItems: 'center'
    },
    
    cardsTexto:{
      fontSize: 85,
      marginLeft: 10
    },

    scrollview:{
      width: 320,
      height: 200
    },
    
    footer:{
      fontSize: 65,
      color: '#0080FF',
      marginLeft: 10,
    }
  })
