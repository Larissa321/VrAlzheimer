// Instalar todos os comandos abaixo e depois dar "yarn start" ou "expo start"

// { expo install expo-linear-gradient }
// { npm i @react-native-community/checkbox }
// { yarn add react-native-paper }


import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, TouchableOpacity, ScrollView,Image} from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";
import { Card} from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/core';
import logo from '../assets/VR_design.png'
import back from '../assets/back.png'
import question from '../assets/question.png'



export default function Paciente() {


  const navigation = useNavigation(); 

  function handleStart(){
    navigation.navigate('EvolucaoNova')
  }
  function handleStart2(){
    navigation.navigate('Menu')
  }

  Alert.alert(
    'Como usar?',
    'Para espelhar a tela em Android baixe: Screen Mirror | Para espelhar a tela em IOS baixe: Mirror MacPC.',
    [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') }
    ],
    { cancelable: false }
  );


  const showAlert = () =>{
    Alert.alert(
       'Para espelhar a tela em Android baixe: Screen Mirror. Para espelhar a tela em IOS baixe: Mirror MacPC.'
    ) 
 }
 
const remote = 'https://i.pinimg.com/originals/54/27/10/542710e5150ee4f7340bea644f6c75f0.jpg';
  return (
    <View style={styles.telaPrincipal}>
      <LinearGradient
          colors={['rgba(2, 24, 88, 0.4)', '#0091F2']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 400,
          }}
        />

    <ScrollView style={styles.scrollview}>


    <View style={styles.viewlogo}>
    <Image source={logo} />
    </View>
    

     <View style={styles.telaTitulo}>
     <Text style={styles.usuario}>Pedro Fonseca</Text>
     <TouchableOpacity>
      <Text style={styles.verPerfil}>ver perfil</Text>
     </TouchableOpacity> 
      <TouchableOpacity onPress = {showAlert} style = {styles.comoUsar}>
       <Text>Como usar?</Text>
      </TouchableOpacity>
    </View>

 


    <View style={styles.telaVideo}>
     <Text style={styles.usuario}>Valsa Venesiana</Text>
     <Text style={styles.info}>2 minutos</Text>
    </View>
    <View style={styles.video}>
      <YoutubePlayer
        play={false}
        height={200}
        videoId={"3sM3yVV-Yrg"}
      />
    </View>

    <View style={styles.telaVideo}>
     <Text style={styles.usuario}>Caminhada na Floresta</Text>
     <Text style={styles.info}>8 minutos</Text> 
    </View>
       
    <View style={styles.video}>
      <YoutubePlayer
        play={false}
        height={200}
        videoId={"OkWVZa8mwog"}
      />
    </View>
       </ScrollView>

       <View style={styles.footer}>
            
                   
       
            <TouchableOpacity 
               style={styles.voltar}
               onPress={handleStart2}>
               <Text style={styles.assistirTexto}>VOLTAR</Text>
             </TouchableOpacity>
     

      
              <TouchableOpacity 
                 style={styles.evolucao}
                 onPress={handleStart}>
                 <Text style={styles.assistirTexto}>EVOLUÇÃO</Text>
              </TouchableOpacity>

      
        
  
         </View>

   </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipal: {
   flex: 1,
   backgroundColor: '#0091F2',
   alignItems: 'center',
  },

  viewlogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },

  usuario: {
    fontSize: 30,
    color: 'black',
    fontWeight:'bold',
    width:300,
   },

   info: {
    fontSize: 14,
    color: 'black',
    fontWeight:'bold',
   },

   telaTitulo: {
    
    backgroundColor: 'white',
    marginTop: 35,
    marginBottom: 1,
    marginRight:20,
    padding: 40,
    borderRadius: 20,
    width:320,
   },

   telaVideo: {
    backgroundColor: 'white',
    marginTop: 30,
    marginRight:20,
    padding: 20,
    width:320,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
   },

   video: {
    marginBottom:5,
   },

   comoUsar: {
    backgroundColor: '#4ba37a',
    width: 100,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 150,
 },

 verPerfil: {
  fontSize: 25,
  color:'#4a8ea8',  
  },

  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginTop: 16,
    width: 350,
  },

  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },

  cardsTexto: {
    fontSize: 85,
    marginLeft: 10,
    fontWeight:'bold',
 
   },

   subTexto: {
    fontSize: 15,
    color: '#0080FF',
    marginLeft: 10,
   },

   assistirTexto: {
    fontSize: 25,
    color:'white',
    height: 50,
    marginTop: 11,
    alignItems: 'center',
   },

   
  imagens: {
    borderRadius: 25,
   },

   assistir: {
    width: 200,
    height: 50,
    backgroundColor: '#81BEF7',
    marginTop: 25,
    marginBottom: 10,
    marginLeft: 46,
    alignItems: 'center',
    borderRadius: 25,
   },

   cards: {
    fontSize: 25,
    marginLeft: 10.5,
    width: 300,
    height: 250,
    marginBottom: 150,
    marginTop: 60,
    borderRadius: 25,
    justifyContent:'space-between'
   },

   scrollview: {
    width: 320,
    height: 200,
   },

   footer: {
    color: '#0080FF',
    marginLeft: 10,
   },

   evolucao: {
    width: 200,
    height: 50,
    backgroundColor: 'orange',
    marginTop: 25,
    marginBottom: 10,
    marginLeft: 1,
    alignItems: 'center',
    borderRadius: 25,
    alignContent:'flex-end',
   },
 
    voltar: {
    width: 200,
    height: 50,
    backgroundColor: '#81BEF7',
    marginTop: 25,
    alignItems: 'center',
    borderRadius: 25,
    alignContent:'flex-start',
   }
})