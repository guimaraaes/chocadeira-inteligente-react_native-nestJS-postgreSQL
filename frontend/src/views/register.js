import React, { useState } from "react";
import { View } from "react-native";
import { Provider } from "react-native-paper";
import FormRegister from "../components/form-register";
import Header from "../components/header";
import api from "../services/api";

export default function Register(props) {
  const [CPF, setCPF] = useState("");
  const [nome, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function postUser() {
    await api
      .post(
        "/user",
        {
          nome: nome,
          cpf: CPF,
          email: email,
          senha: password,
        },
        {
          headers: {
            accept: "*/*",
          },
        }
      )
      .then((response) => {
        props.navigation.navigate("login");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }
  return (
    <Provider>
      <View>
        <Header login={true} />

        <FormRegister
          cpf={CPF}
          setCPF={setCPF}
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          postUser={postUser}
        ></FormRegister>
      </View>
    </Provider>
  );
}
