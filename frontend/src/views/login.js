import React, { useState } from "react";
import { View } from "react-native";
import { Provider } from "react-native-paper";
import FormLogin from "../components/form-login";
import Header from "../components/header";
import api from "../services/api";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("s");
  const [senha, setSenha] = useState("s");
  var acessToken = "";
  function navigateToHome() {
    navigation.navigate("home", {
      acessToken: acessToken,
    });
  }
  async function postLogin() {
    await api
      .post("/auth/singin", {
        email: email,
        senha: senha,
      })
      .then((response) => {
        acessToken = response.data.acessToken;
        console.log("login");
        console.log(acessToken);
        navigateToHome();
      })
      .catch((error) => {
        alert("Credenciais inválidas");
      });
  }
  return (
    <Provider>
      <View>
        <Header login={true} />

        <FormLogin
          navigation={navigation}
          setEmail={setEmail}
          setSenha={setSenha}
          postLogin={postLogin}
        />
      </View>
    </Provider>
  );
}
