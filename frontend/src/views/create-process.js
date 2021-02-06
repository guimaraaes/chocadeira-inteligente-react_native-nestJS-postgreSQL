import React, { useState } from "react";
import { View } from "react-native";
import { Provider } from "react-native-paper";
import FormCreate from "../components/form-create-process";
import Header from "../components/header";
import api from "../services/api";
export default function CreateProcess(props) {
  const [temperatura, setTemperatura] = useState(null);
  const [umidade, setUmidade] = useState(null);
  const [viragem, setViragem] = useState();

  async function postProcess() {
    await api
      .post(
        "/process",
        {
          temperatura: Number(temperatura),
          umidade: Number(umidade),
          viragem: Number(viragem.getHours() * 60 + viragem.getMinutes()),
        },
        {
          headers: {
            accept: "*/*",
            Authorization: "Bearer " + props.route.params.acessToken,
          },
        }
      )
      .then((response) => {
        alert("Processo criado");
      })
      .catch((error) => {
        // console.log(error.response);
        alert(error.response.data.message);
      });
  }

  return (
    <Provider>
      <View>
        <Header navigation={props.navigation} />
        <FormCreate
          temperatura={temperatura}
          umidade={umidade}
          viragem={viragem}
          setTemperatura={setTemperatura}
          setUmidade={setUmidade}
          setViragem={setViragem}
          postProcess={postProcess}
        />
      </View>
    </Provider>
  );
}
