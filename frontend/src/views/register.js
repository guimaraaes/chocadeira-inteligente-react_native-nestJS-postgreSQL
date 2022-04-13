import React, { useState } from "react";
import { View } from "react-native";
import { Provider } from "react-native-paper";
import FormRegister from "../components/form-register";
import Header from "../components/header";
export default function Register(props) {
  const [CPF, setCPF] = useState("");
  const [nome, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        ></FormRegister>
      </View>
    </Provider>
  );
}
