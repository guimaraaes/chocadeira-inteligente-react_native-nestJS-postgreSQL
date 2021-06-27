// import { TextField } from "@material-ui/core";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function FormCreate(props) {
  const [temperatura_check, setTemperatura] = React.useState(
    props.id || props.temperatura ? true : false
  );
  const [umidade_check, setUmidade] = React.useState(
    props.id || props.umidade ? true : false
  );
  const [viragem_check, setViragem] = React.useState(
    props.id || props.viragem ? true : false
  );
  const [value, setValue] = React.useState(true);
  const [show, setShow] = useState(false);

  return (
    <View style={styles.container}>
      {props.data_inicio ? (
        <Text style={styles.info}>
          {moment(props.data_inicio).format("LL")}
        </Text>
      ) : null}
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
        <Text style={{ color: "#F23" }}>
          Insira o valor para temperatura entre 0 e 80 °C
        </Text>
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
        <Text style={{ color: "#F23" }}>
          Insira o valor para umidade entre 0 e 100%
        </Text>
      ) : null}
      {show && (
         <DateTimePicker
          mode="time"
          is24Hour={true}
          value={ new Date ( moment(props.viragem).format() )}
          onChange={(event, selectedDate) => {
            setShow(false);
            setViragem(true);
            console.log(selectedDate);
            props.setViragem(moment(selectedDate).format() );
          }}
          onTouchMove={() => {
            setShow(false);
 
          }}
        />
       )}
 
      <TextInput
        label="Viragem H"
        underlineColor="#F9A825"
        color="#F9A825"
        mode="outlined"
        value={ moment(props.viragem).format("HH:mm")  }
        onTouchStart={() => {
          setShow(true);
        }}
      />
      {/* <Text>{moment(props.viragem).format()}</Text> */}
      {!viragem_check ? (
        <Text style={{ color: "#F23" }}>Insira o valor para viragem</Text>
      ) : null}
      {/* <View style={styles.alert}>
        <RadioButton
          status={value ? "checked" : "unchecked"}
          onPress={() => setValue(!value)}
        />
        <Text>alerta altas variações</Text>
      </View> */}
      <Button
        style={styles.button}
        color="#F9A825"
        onPress={() => {
          props.temperatura && props.umidade ? props.postORputProcess() : null;
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
    marginTop: "5%",
    margin: 20,
    justifyContent: "space-around",
  },
  button: {
    width: 200,
    marginTop: 30,
    color: "#fff2",
    alignSelf: "flex-end",
  },
  info: {
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  alert: {
    flexDirection: "row",
    alignItems: "baseline",
  },
});
