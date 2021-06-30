import React from 'react';
import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps{
  title: string;
}


export function ButtonCinza ({title, ...rest} : ButtonProps){
  return(
    <TouchableOpacity 
      style={styles.conteinerCinza}
      {...rest}
      >
      <Text style={styles.text}>
        {title}
      </Text>
   </TouchableOpacity>   
  )
}
export function ButtonLaranja ({title, ...rest} : ButtonProps){
  return(
    <TouchableOpacity 
      style={styles.conteinerLaranja}
      {...rest}
      >
      <Text style={styles.text}>
        {title}
      </Text>
   </TouchableOpacity>   
  )
}

const styles = StyleSheet.create({
  text:{
    color:'white',
    fontSize:16,
    fontWeight: 'bold'
  },
  conteinerCinza:{
    width:"60%",
    backgroundColor: '#0C141F',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:16,
    height:50,
    marginBottom: 150,
    
  },
  conteinerLaranja:{
    width:"60%",
    backgroundColor: '#F8B059',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:16,
    height:50,
    marginVertical:5
    
  }
})
