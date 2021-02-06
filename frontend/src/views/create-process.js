import React, { useState } from "react";
import { View } from "react-native";
import { Provider } from "react-native-paper";
import FormCreate from "../components/form-create-process";
import Header from "../components/header";

export default function CreateProcess(props) {
  const [temperatura, setTemperatura] = useState(null);
  const [umidade, setUmidade] = useState(null);
  const [viragem, setViragem] = useState();

  async function postProcess() {
    console.log(
      {
        temperatura: temperatura,
        umidade: umidade,
        viragem: viragem.getHours() * 60 + viragem.getMinutes(),
      },
      { headers: props.route.params.acessToken }
    );
    // var response = await api.post(
    //   "/process",
    //   {
    //     temperatura: temperatura,
    //     umidade: umidade,
    //     viragem: viragem.getHours() * 60 + viragem.getMinutes(),
    //   },
    //   { headers: props.route.params.acessToken }
    // );
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
