// Instalar todos os comandos abaixo e depois dar "yarn start" ou "expo start"

// { expo install expo-linear-gradient }
// { npm i @react-native-community/checkbox }
// { yarn add react-native-paper }


import React, {useState} from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity, ScrollView,Image} from 'react-native';
import { WebView } from 'react-native-webview';
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
  {/*Render não implementado corretamento preciso de auxilio*/}
  render();{
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
    <View>
    <TouchableOpacity onPress={handleStart2} style={styles.back}>
    <Image source={back} />
    </TouchableOpacity>
    <TouchableOpacity onPress={alert} style={styles.question}>
    <Image source={question} />
    </TouchableOpacity>
    </View>
    
    <View style={styles.viewlogo}>
    <Image source={logo} />
    </View>
     <View style={styles.telaTitulo}>
     <Text style={styles.usuario}>Pedro Fonseca</Text> {/*Get name Paciente*/}
     <Text style={styles.info}>65 anos</Text> {/*Get idade Paciente*/}
     <Text style={styles.info}>Eubasico</Text> {/*Get incapacidade Paciente*/}
     <Text style={styles.info}>Alzheimer Moderado</Text> {/*Get grau Alzheimer Paciente*/}
     
     <TouchableOpacity>
      <Text style={styles.verPerfil}>Mais informações</Text>
     </TouchableOpacity> 

      <TouchableOpacity onPress = {showAlert} style = {styles.evolucoesAnteriores}>
       <Text style={styles.evolucoesText}>Evoluções Anteriores</Text>
      </TouchableOpacity>

    </View>

    <View style={styles.telaTitulo}>
       
       <Text style={styles.usuario}>Valsa Venesiana</Text> {/*Get name Paciente*/}
       <Text style={styles.info}>2 minutos</Text> {/*Get idade Paciente*/}
       <WebView
          source={{html: '<iframe src=" https://www.youtube.com/embed/3sM3yVV-Yrg?start=11"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen" allowfullscreen>> </iframe>'}}
       />

      </View>

      <View style={styles.telaTitulo}>
       <Text style={styles.usuario}>Caminhada na Floresta</Text> {/*Get name Paciente*/}
       <Text style={styles.info}>8 minutos</Text> {/*Get idade Paciente*/}
       <WebView
          source={{html: '<iframe src="https://www.youtube.com/embed/OkWVZa8mwog?start=11"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen" allowfullscreen>> </iframe>'}}
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
   
  },
  back: {
    flex: 1,
    alignSelf:'flex-start',
    marginLeft:20,
    marginTop: 20,
    width: 20,
    height: 20,
   
  },
  question: {
    flex: 1,
    alignSelf: 'flex-end',
    width: 20,
    height: 20,  
  },
  usuario: {
    fontSize: 20,
    color: 'black',
    fontWeight:'bold',
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
    marginRight:10,
    marginLeft: 10,
    padding: 40,
    borderRadius: 20,

   },

  comoUsar: {
    backgroundColor: '#4ba37a',
    width: 100,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 150,
 },
 evolucoesAnteriores: {
  width: 160,
  alignItems: 'center',
  marginTop: 15,
  marginLeft: 90,
},
evolucoesText: {
  color: '#4ba37a',
  alignItems: 'center',
  marginLeft: 20,
  fontWeight: 'bold',
},

 verPerfil: {
  fontSize: 12,
  color:'#6192d3',  
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
    marginRight:10,
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
    marginTop: 35,
    marginBottom: 1,
    marginRight:10,
    marginLeft: 10,
    padding: 40,
    borderRadius: 20,
    justifyContent:'space-between',
    

   },

   scrollview: {
      flex: 1,
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
