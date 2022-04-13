import React from "react";
import { Image, Linking, StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function FormLogin(props) {
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
          props.setSenha(text);
        }}
        secureTextEntry={true}
        style={{ margin: 5 }}
      />

      <Text
        onPress={() => Linking.openURL("http://google.com")}
        style={{ alignSelf: "flex-end", margin: 10, color: "blue" }}
      >
        Esqueceu a senha?
      </Text>
      <Button
        style={styles.button}
        color="#F9A825"
        mode="contained"
        onPress={props.postLogin}
        // onPress={navigateToHome}
      >
        Entrar
      </Button>
      <View>
        <Text style={{ margin: 10 }}>
          Primeiro cadastro?{" "}
          <Text
            onPress={() => {
              props.navigation.navigate("register");
            }}
            style={{ color: "blue" }}
          >
            Utilize seu códigoo
          </Text>
        </Text>
      </View>
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
    marginTop: 15,
    marginBottom: 15,
    color: "#fff2",
    alignSelf: "center",
  },

  alert: {
    flexDirection: "row",
    alignItems: "baseline",
  },
});
