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
      <Header />

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

      <View style={estilo.cardMaior}>
        <Card style={estilo.cards}>
          <TextInput
            style={estilo.inputBox}
            placeholder="Digite aqui"
            multiline
            numberOfLines={5}
          />
        </Card>
      </View>

      <View style={estilo.botao}>
        <ButtonCinza title={"Voltar"} onPress={handleStart}></ButtonCinza>
        <ButtonLaranja title={"Salvar"} onPress={handleStart2}></ButtonLaranja>
      </View>
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
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },

  inputBox: {
    height: 20,
    margin: 20,
    justifyContent: "flex-start",
  },
  selecionarData: {
    backgroundColor:'white',
    width: 115,
  },
});
