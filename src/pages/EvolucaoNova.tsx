import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Platform,
  ScrollView,
} from "react-native";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../components/Header";
import { ButtonCinza, ButtonLaranja } from "../components/Button";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function CriarEvolucao() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate("Paciente");
  }
  function handleStart2() {
    navigation.navigate("EvolucaoAnte");
  }
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <SafeAreaView style={estilo.conteiner}>
      <Header/>
      <ScrollView style={estilo.scrollview}>

      <Text style={estilo.texto}>Data: </Text>
      <View>
      <View style={estilo.selecionarData}>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      </View>
      </View>
      <View>
      <TextInput
            style={estilo.inputBox}
            placeholder="Digite aqui"
            multiline={true}
            numberOfLines={10}
            
          />
        </View>

{/*
      <View style={estilo.cardMaior}>
        <Card style={estilo.cards}>
          <TextInput
            style={estilo.inputBox}
            placeholder="Digite aqui"
            multiline={true}
            numberOfLines={1}
          />
        </Card>
      </View>
*/}
      <View style={estilo.botao}>
        <ButtonCinza title={"Voltar"} onPress={handleStart}></ButtonCinza>
        <ButtonLaranja title={"Salvar"} onPress={handleStart2}></ButtonLaranja>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "#0091F2",
    alignItems: "center",
    justifyContent: "space-between",
  },
  texto: {
    color: "white",
    fontSize: 20,
  },
  cardMaior: {
    width: "85%",
    justifyContent: "center",
  },
  cards: {
    fontSize: 25,
    height: "60%",
    borderRadius: 20,
    justifyContent: "space-between",
  },

  botao: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent:"center",
    alignSelf:"center",
    
  },
  inputBox: {
    height: "60%",
    maxHeight:300,
    margin: 20,
    justifyContent: "flex-start",
    backgroundColor:'white',
    borderRadius:10,
    lineHeight:16,
    fontSize:16,
    padding: 10,
    paddingTop:10,
    paddingBottom:10
  },
  selecionarData: {
    backgroundColor:'white',
    width: 116,
  },
  scrollview: {
    width: "100%",
    height: "100%",
   },
});
