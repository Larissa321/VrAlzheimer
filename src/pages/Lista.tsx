import React,{useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { Card} from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/core';
import logo from '../assets/VR_design.png'
import add from '../assets/Add.png'
import list from '../assets/Lista.png'


export default function Lista() {

  const navigation = useNavigation(); 

  function handleStart(){
    navigation.navigate('Paciente')
  }
  function handleStart2(){
    navigation.navigate('SelecionarVideos')
  }

  const mockData = [
    { id: '1', text: 'Expo 💙' },
    { id: '2', text: 'is' },
    { id: '3', text: 'Awesome!' }
  ]
  


    return (
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.header}>
          <Text style={styles.textfooter}>VR ALZHEIMER</Text>
        </View>

    <ScrollView style={styles.scrollview}>
    {/*Aqui jás um searchzinho*/}
    <View><FlatList
      data={mockData}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Text style={{ fontSize: 22 }}>
          {item.id} - {item.text}
        </Text>
      )}
    /></View>


    <Card style={styles.cards}>
         <Card.Title style={styles.cardsTexto} title="Parque" />
         <Card.Title style={styles.subTexto} title="5 min" />

        <TouchableOpacity
          style={styles.assistir} >
          <Text style={styles.assistirTexto}>Assistir</Text>
        </TouchableOpacity>

         <Card.Cover style={styles.imagens} source={{ uri: 'https://www.osmais.com/wallpapers/201308/bicicleta-parque-wallpaper.jpg' }} />
         
        </Card>

        <Card style={styles.cards}>
         <Card.Title style={styles.cardsTexto} title= "Praia" />
         <Card.Title style={styles.subTexto} title= "15 min" />
          <TouchableOpacity 
          style={styles.assistir} >
          <Text style={styles.assistirTexto}>Assistir</Text>
        </TouchableOpacity>
         <Card.Cover style={styles.imagens} source={{ uri: 'https://profelisson.com.br/wp-content/uploads/2017/11/praia-palmeiras-wallpaper.jpg' }} />
        </Card>

        <Card style={styles.cards}>
         <Card.Title style={styles.cardsTexto} title="Floresta" />
         <Card.Title style={styles.subTexto} title="10 min"  />
          <TouchableOpacity 
          style={styles.assistir} >
          <Text style={styles.assistirTexto}>Assistir</Text>
        </TouchableOpacity>
         <Card.Cover style={styles.imagens} source={{ uri:'https://wallpaperaccess.com/full/3352658.jpg' }} />
        </Card>

 


    <View style={styles.telaVideo}>
     <Text style={styles.usuario}>Valsa Venesiana</Text>
     <Text style={styles.info}>2 minutos</Text>
    </View>
   

    <View style={styles.telaVideo}>
     <Text style={styles.usuario}>Caminhada na Floresta</Text>
     <Text style={styles.info}>8 minutos</Text> 
    </View>
       
       </ScrollView>

      </KeyboardAvoidingView>
      
    );
}

const styles = StyleSheet.create({
  telaPrincipal: {
    flex: 1,
    backgroundColor: '#0091F2',
    alignItems: 'center',
   },
  background: {
    alignItems: 'center',
    backgroundColor: '#0087E2',
    height: '100%',
  },
  btnsubmit: {
    backgroundColor: '#FFFFFF',
    width: '60%',
    borderRadius: 20,
    alignItems: 'center',
    padding: 70,
    marginTop: 20,
  },
  textsubmit: {
    fontSize: 18,
    textAlignVertical: 'center'
  },
  header: {
    backgroundColor: '#00009C',
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  textfooter: {
    color: 'white',
    fontSize: 25,
  },
  body: {
    alignItems: 'center',
    height: '80%',
    justifyContent: 'center',
  },
  scrollview: {
    width: 320,
    height: 200,
   },
   viewlogo: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     marginTop: 35,
   }, telaTitulo: {
    
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
   container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
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
   color:'lightblue',  
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
