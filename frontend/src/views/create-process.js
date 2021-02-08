import axios from "axios";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Provider } from "react-native-paper";
import FormCreate from "../components/form-create-process";
import Header from "../components/header";
import api from "../services/api";

export default function CreateProcess(props) {
  const [temperatura, setTemperatura] = useState();
  const [umidade, setUmidade] = useState();
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
        props.navigation.navigate("home");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }

  async function putProcess() {
    await api
      .put(
        "/process/" + props.route.params.id,
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
        props.navigation.navigate("process", {
          id: props.route.params.id,
        });
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }

  const [data_inicio, setData_inicio] = useState();
  async function getProcessById() {
    await api
      .get("process/" + props.route.params.id, {
        headers: {
          accept: "*/*",
          Authorization: "Bearer " + props.route.params.acessToken,
        },
      })
      .then((response) => {
        if (!data_inicio) {
          setData_inicio(response.data.data_inicio);
          setTemperatura(String(response.data.temperatura));
          setUmidade(String(response.data.umidade));
          setViragem(new Date(response.data.viragem));
        }
      })
      .catch((error) => {
        // console.log(error.response);
        alert(error.response.data.message);
      });
  }
  if (props.route.params.id) {
    useEffect(() => {
      const source = axios.CancelToken.source();

      getProcessById();
      return () => {
        source.cancel();
      };
    }, [data_inicio]);
  }
  return (
    <Provider>
      <View>
        <Header create={true} navigation={props.navigation} />
        {/* <Text>{process.temperatura}</Text> */}
        <FormCreate
          id={props.route.params.id}
          data_inicio={data_inicio}
          temperatura={temperatura}
          umidade={umidade}
          viragem={viragem}
          setTemperatura={setTemperatura}
          setUmidade={setUmidade}
          setViragem={setViragem}
          postORputProcess={props.route.params.id ? putProcess : postProcess}
        />
      </View>
    </Provider>
  );
}
