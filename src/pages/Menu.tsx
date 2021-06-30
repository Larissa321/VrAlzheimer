import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';

export default function Menu() {

  const navigation = useNavigation(); 

  function handleStart(){
    navigation.navigate('Paciente')
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
    width: '70%',
    borderRadius: 20,
    alignItems: 'center',
    padding: 70,
    marginTop: 20,
  },
  textsubmit: {
    fontSize: 18,
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
  }
})