import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
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

  const [process, setProcess] = useState([]);
  async function getProcessById() {
    await api
      .get("process/" + props.route.params.id, {
        headers: {
          accept: "*/*",
          Authorization: "Bearer " + props.route.params.acessToken,
        },
      })
      .then((response) => {
        setProcess(response.data);
        setTemperatura(String(response.data.temperatura));
        setUmidade(String(response.data.umidade));
        setViragem(new Date(response.data.viragem));
      })
      .catch((error) => {
        // console.log(error.response);
        alert(error.response.data.message);
      });
  }
  if (props.route.params.id) {
    useEffect(() => {
      getProcessById();
      // console.log("oks");
      // setTemperatura(process.temperatura);
      // setUmidade(process.umidade);
      // setViragem(new Date(process.viragem));
    });
  }
  return (
    <Provider>
      <View>
        <Header navigation={props.navigation} />
        <Text>{process.temperatura}</Text>
        <FormCreate
          id={props.route.params.id}
          process={props.route.params.id ? process : null}
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
