import React, { createRef } from "react";
import { Image, StyleSheet, View } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { Button, TextInput } from "react-native-paper";

export default function FormRegister(props) {
  const ref = createRef();
  const ref2 = createRef();
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <Image
          source={require("../../assets/chicken-pngrepo-com.png")}
          style={{ width: 50, height: 50 }}
        />
      </View>

      <TextInput
        label="CPF"
        underlineColor="#F9A825"
        color="#F9A825"
        mode="outlined"
        value={props.cpf}
        style={{ margin: 5 }}
        setCPF={props.setCPF}
        render={(props) => (
          <TextInputMask
            {...props}
            type={"cpf"}
            onChangeText={(text) => {
              props.setCPF(text);
            }}
          />
        )}
      />

      <TextInput
        label="nome"
        underlineColor="#F9A825"
        color="#F9A825"
        mode="outlined"
        onChangeText={(text) => {
          props.setName(text);
        }}
        style={{ margin: 5 }}
      />

      <TextInput
        label="e-mail"
        underlineColor="#F9A825"
        color="#F9A825"
        mode="outlined"
        onChangeText={(text) => {
          props.setEmail(text);
        }}
        style={{ margin: 5 }}
      />

      <TextInput
        label="senha"
        underlineColor="#F9A825"
        color="#F9A825"
        mode="outlined"
        onChangeText={(text) => {
          props.setPassword(text);
        }}
        secureTextEntry={true}
        style={{ margin: 5 }}
      />

      <Button
        style={styles.button}
        color="#F9A825"
        mode="contained"
        onPress={props.postUser}
        // onPress={navigateToHome}
      >
        Criar cadastro
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
