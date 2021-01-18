import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function FormLogin() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/chicken-pngrepo-com.png")}
        style={{ width: 150, height: 150, alignSelf: "center" }}
      />
      <TextInput
        label="e-mail"
        underlineColor="#F9A825"
        color="#F9A825"
        mode="outlined"
        style={{ margin: 5 }}
      />

      <TextInput
        label="senha"
        underlineColor="#F9A825"
        color="#F9A825"
        mode="outlined"
        style={{ margin: 5 }}
      />

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
        mode="contained"
        onPress={() => {}}
      >
        Entrar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "70%",
    marginTop: "15%",
    margin: 20,
  },
  button: {
    width: 200,
    marginTop: 30,
    color: "#fff2",
    alignSelf: "center",
  },

  alert: {
    flexDirection: "row",
    alignItems: "baseline",
  },
});
