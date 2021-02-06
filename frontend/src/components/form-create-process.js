// import { TextField } from "@material-ui/core";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, RadioButton, TextInput } from "react-native-paper";

export default function FormCreate(props) {
  const [temperatura_check, setTemperatura] = React.useState(false);
  const [umidade_check, setUmidade] = React.useState(false);
  const [viragem_check, setViragem] = React.useState(false);
  const [value, setValue] = React.useState(true);
  const [show, setShow] = useState(false);

  function check() {
    // props.temperatura ? setTemperatura(true) : setTemperatura(false);
    // props.umidade ? setUmidade(true) : setUmidade(false);
    props.viragem ? setViragem(true) : setViragem(false);
    console.log(temperatura_check && umidade_check && viragem_check);

    // if (temperatura_check && umidade_check && viragem_check) {
    //   // props.postProcess();
    //   console.log(temperatura_check && umidade_check && viragem_check);
    // }
  }
  return (
    <View style={styles.container}>
      <TextInput
        label="Temperatura °C"
        underlineColor="#F9A825"
        color="#F9A825"
        mode="outlined"
        value={props.temperatura}
        keyboardType="decimal-pad"
        onChangeText={(temperatura) => {
          if (temperatura < 80 && temperatura >= 0) {
            props.setTemperatura(temperatura);
            setTemperatura(true);
          } else {
            setTemperatura(false);
          }
        }}
      />
      {!temperatura_check ? (
        <Text style={{ color: "#F23" }}>Insira o valor para temperatura</Text>
      ) : null}
      <TextInput
        label="Umidade %"
        underlineColor="#F9A825"
        color="#F9A825"
        mode="outlined"
        value={props.umidade}
        keyboardType="decimal-pad"
        onChangeText={(umidade) => {
          if (umidade < 100 && umidade >= 0) {
            props.setUmidade(umidade);
            setUmidade(true);
          } else {
            setUmidade(false);
          }
        }}
      />
      {!umidade_check ? (
        <Text style={{ color: "#F23" }}>Insira o valor para umidade</Text>
      ) : null}
      {show && (
        <DateTimePicker
          mode="time"
          is24Hour={true}
          value={new Date(String(moment(props.viragem)))}
          onChange={(event, selectedDate) => {
            setShow(false);
            setViragem(true);
            props.setViragem(selectedDate);
          }}
          onTouchMove={() => setShow(false)}
        />
      )}
      <TextInput
        label="Viragem H"
        underlineColor="#F9A825"
        color="#F9A825"
        mode="outlined"
        value={props.viragem ? moment(props.viragem).format("hh:mm") : null}
        onTouchStart={() => {
          setShow(true);
        }}
      />
      {!viragem_check ? (
        <Text style={{ color: "#F23" }}>Insira o valor para viragem</Text>
      ) : null}
      <View style={styles.alert}>
        <RadioButton
          status={value ? "checked" : "unchecked"}
          onPress={() => setValue(!value)}
        />
        <Text>alerta altas variações</Text>
      </View>
      <Button
        style={styles.button}
        color="#F9A825"
        onPress={() => {
          props.temperatura && props.umidade ? props.postProcess() : null;
        }}
        mode="contained"
      >
        CONFIGURAR
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "65%",
    marginTop: "15%",
    margin: 20,
    justifyContent: "space-around",
  },
  button: {
    width: 200,
    marginTop: 30,
    color: "#fff2",
    alignSelf: "flex-end",
  },

  alert: {
    flexDirection: "row",
    alignItems: "baseline",
  },
});
