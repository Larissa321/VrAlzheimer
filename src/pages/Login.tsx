// Instalar comandos a baixo e depois dar "yarn start" ou "expo start"

// { npm install --save react-native-vector-icons }

import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';

export default function Login() {

  const navigation = useNavigation(); 

  function handleStart(){
    navigation.navigate('Menu')
  }

    return (
      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.header}>
          <Text style={styles.textfooter}>VR ALZHEIMER</Text>
        </View>
        

        <View style={styles.body}>
      
          <TouchableOpacity style={styles.btnsubmit}>

          

            <Text style={styles.textsubmit}> Novo Paciente </Text>
           
            
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnsubmit}  onPress={handleStart}>

            <Image
             style={styles.image2}
             source={require('./src/assets/Lista.png')} />

            <Text style={styles.textsubmit}> Lista de Pacientes </Text>
            
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    backgroundColor: '#0087E2',
    height: '100%',
  },
  btnsubmit: {
    backgroundColor: '#FFFFFF',
    width: 250,
    height: 180,
    borderRadius: 20,
    alignItems: 'center',
    padding: 50,
    marginTop: 75,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 2, width: 2 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
  },
  textsubmit: {
    fontSize: 16,
    fontWeight: "bold",
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

  image1: {
    height: 50,
    width: 50,
    alignItems: 'center',
    marginRight: 10,
  },

  image2: {
    height: 50,
    width: 50,
    marginTop: 5,
    alignItems: 'center',
  }
})