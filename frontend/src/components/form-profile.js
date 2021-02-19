import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function FormProfile(props) {
  const [email, setEmail] = useState(props.email);
  const [senha, setSenha] = useState(props.senha);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../../assets/chicken-pngrepo-com.png")}
          style={{ width: 50, height: 50 }}
        />
        <Text style={{ fontSize: 30, fontWeight: "bold", marginLeft: 10 }}>
          {props.user.nome}
        </Text>
      </View>
      <TextInput
        label="CPF"
        underlineColor="#F9A825"
        color="#F9A825"
        mode="outlined"
        value={props.user.cpf}
        disabled
        // onChangeText={(text) => {
        //   setEmail(text);
        //   props.setEmail(text);
        // }}
        style={{ margin: 5 }}
      />

      <TextInput
        label="e-mail"
        underlineColor="#F9A825"
        color="#F9A825"
        mode="outlined"
        value={props.user.email}
        onChangeText={(text) => {
          setEmail(text);
          props.setEmail(text);
        }}
        style={{ margin: 5 }}
      />

      <TextInput
        label="senha"
        underlineColor="#F9A825"
        color="#F9A825"
        mode="outlined"
        // value={props.user.senha}
        onChangeText={(text) => {
          setSenha(text);
          props.setSenha(text);
        }}
        secureTextEntry={true}
        style={{ margin: 5 }}
      />

      <Button
        style={styles.button}
        color="#F9A825"
        mode="contained"
        onPress={props.postLogin}
        // onPress={navigateToHome}
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
