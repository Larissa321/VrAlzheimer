import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Platform, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CheckBox from '@react-native-community/checkbox';
import { Card } from 'react-native-paper';
import {useNavigation} from '@react-navigation/core';

export default function SelecionarVideos() {
   const [agree1, setAgree1] = useState(false);
   const [agree2, setAgree2] = useState(false);
   const [agree3, setAgree3] = useState(false);

   const navigation = useNavigation(); 

    function handleStart(){
      navigation.navigate('Menu')
    }

   return (
     

      <View style={styles.telaPrincipal}>
        
      
        <LinearGradient
          colors={['rgba(2, 4, 88, 0.5)', '#0091F2']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 400,
          }}
        />
        
        
      
      <ScrollView style={styles.scrollview}>
      
       <View style={styles.telaTitulo}>

       <Text style={styles.usuario}>Vídeos</Text>
      
      

      </View>
      

        <Card style={styles.cards}>
         <View>
            <View>
                <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                          <Card.Title style={styles.cardsTexto} title="Parque" />
                    </View>

                        <View style={styles.wrapper}>
                          {Platform.OS === 'ios' ? (
                            <CheckBox
                              boxType="square"
                              value={agree1}
                              onChange={() => setAgree1(!agree1)}
                            />
                          ) : (
                            <CheckBox value={agree1} onChange={() => setAgree1(!agree1)} />
                          )}
                        </View>
                   
                    <View style={{flex:1}}>
                             <View style={{ flexDirection: 'column'}}>
                       </View>
                    </View>
                </View>
            </View>
        </View>
        
         <Card.Title style={styles.subTexto} title="5 min" />
           <TouchableOpacity 
             style={styles.assistir} >
             <Text style={styles.adicionarTexto}>Adicionar</Text>
          </TouchableOpacity>
         <Card.Cover style={styles.imagens} source={{ uri: 'https://www.osmais.com/wallpapers/201308/bicicleta-parque-wallpaper.jpg' }} />
         
        </Card>

        <Card style={styles.cards}>
         <View>
            <View>
                <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                          <Card.Title style={styles.cardsTexto} title="Praia" />
                    </View>

                        <View style={styles.wrapper}>
                          {Platform.OS === 'ios' ? (
                            <CheckBox
                              boxType="square"
                              value={agree2}
                              onChange={() => setAgree2(!agree2)}
                            />
                          ) : (
                            <CheckBox value={agree2} onChange={() => setAgree2(!agree2)} />
                          )}
                        </View>
                   
                    <View style={{flex:1}}>
                             <View style={{ flexDirection: 'column'}}>
                       </View>
                    </View>
                </View>
            </View>
        </View>
        
         <Card.Title style={styles.subTexto} title="15 min" />
           <TouchableOpacity 
             style={styles.assistir} >
             <Text style={styles.adicionarTexto}>Adicionar</Text>
          </TouchableOpacity>
         <Card.Cover style={styles.imagens} source={{ uri: 'https://profelisson.com.br/wp-content/uploads/2017/11/praia-palmeiras-wallpaper.jpg' }} />
         
        </Card>

        <Card style={styles.cards}>
         <View>
            <View>
                <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                          <Card.Title style={styles.cardsTexto} title="Floresta" />
                    </View>

                        <View style={styles.wrapper}>
                          {Platform.OS === 'ios' ? (
                            <CheckBox
                              boxType="square"
                              value={agree3}
                              onChange={() => setAgree3(!agree3)}
                            />
                          ) : (
                            <CheckBox value={agree3} onChange={() => setAgree3(!agree3)} />
                          )}
                        </View>
                   
                    <View style={{flex:1}}>
                             <View style={{ flexDirection: 'column'}}>
                       </View>
                    </View>
                </View>
            </View>
        </View>
        
         <Card.Title style={styles.subTexto} title="10 min" />
           <TouchableOpacity 
             style={styles.assistir} >
             <Text style={styles.adicionarTexto}>Adicionar</Text>
          </TouchableOpacity>
         <Card.Cover style={styles.imagens} source={{ uri: 'https://wallpaperaccess.com/full/3352658.jpg' }} />
         
        </Card>

      </ScrollView>
      
        <View style={styles.footer}>
            
                   
         <View style={{flex:1}}>
             <TouchableOpacity
               style={styles.voltar} >
                                            
              <Text style={styles.voltarTexto} onPress={handleStart}>VOLTAR</Text>

             </TouchableOpacity>

         </View>
         
            <View style={{flex:1,}}>

              

            </View>
                
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

  footer: {
   flex: 0.5,
  },

  telaTitulo: {
   backgroundColor: 'navy',
   marginTop: 28,
   marginBottom: 1,
   marginLeft:20,
   padding: 40,
   width:400,
   borderRadius: 50,

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

  imagens: {
   borderRadius: 25,
  },

  usuario: {
   fontSize: 50,
   color: 'white',
   width:300,
   marginLeft: 45,
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

   scrollview: {
   width: 320,
   height: 200,
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
  },

  voltarTexto: {
   fontSize: 24,
   color:'white',
   height: 50,
   marginTop: 11,
   alignItems: 'center',
  },

  evolucaoTexto: {
   fontSize: 24,
   color:'white',
   height: 50,
   marginTop: 11,
   marginLeft:1,
   alignItems: 'center',
  },

  adicionarTexto: {
   fontSize: 25,
   color:'white',
   height: 50,
   marginTop: 9,
   alignItems: 'center',
  },

  container: {
    width: '100%',
    padding: 16,
    paddingTop: 100,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    paddingVertical: 15,
  },
  text: {
    lineHeight: 30,
    marginLeft: 10,
  },
});

  
