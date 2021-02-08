import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { Provider } from "react-native-paper";
import Header from "../components/header";
import ProcessComponent from "../components/process";
import api from "../services/api";
export default function Process(props) {
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
        // console.log(response.data);
      });
  }

  async function putFinishProcess() {
    console.log(props.route.params.acessToken);
    await api
      .put(
        "/process/finish/" + props.route.params.id,
        {},
        {
          headers: {
            accept: "*/*",
            Authorization: "Bearer " + props.route.params.acessToken,
          },
        }
      )
      .then(() => {
        props.navigation.navigate("home", {});
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }
  const mounted = useRef();

  useEffect(() => {
    const source = axios.CancelToken.source();
    if (!mounted.current) getProcessById();
    return () => {
      source.cancel();
    };
  }, [process]);
  return (
    <Provider>
      <View>
        {/* <Text>{process.data_inicio}</Text> */}
        <Header process={true} />
        {/* {process ? ( */}
        <ProcessComponent
          navigation={props.navigation}
          acessToken={props.route.params.acessToken}
          process={process}
          putFinishProcess={putFinishProcess}
        />
        {/* ) : null} */}
      </View>
    </Provider>
  );
}
