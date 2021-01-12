// import { TextField } from "@material-ui/core";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, RadioButton, TextInput } from "react-native-paper";

export default function FormCreate() {
  const [text, setText] = React.useState("");
  const [value, setValue] = React.useState(true);

  return (
    <View style={styles.container}>
      <TextInput
        label="Temperatura °C"
        underlineColor="#F9A825"
        color="#F9A825"
        mode="outlined"
        keyboardType="decimal-pad"
        // icon="o"
      />

      <TextInput
        label="Umidade %"
        underlineColor="#F9A825"
        color="#F9A825"
        mode="outlined"
        keyboardType="decimal-pad"
        // icon="o"
      />
      <TextInput
        label="Viragem H"
        underlineColor="#F9A825"
        color="#F9A825"
        mode="outlined"
        keyboardType="decimal-pad"
        type
        // icon="o"
      />
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
        label="CONFIGURAR"
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
