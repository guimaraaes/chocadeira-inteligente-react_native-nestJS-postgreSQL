import React, { useState } from "react";
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
  getProcessById();
  return (
    <Provider>
      <View>
        {/* <Text>{process.data_inicio}</Text> */}
        <Header process={true} />
        <ProcessComponent
          navigation={props.navigation}
          acessToken={props.route.params.acessToken}
          process={process}
        />
      </View>
    </Provider>
  );
}
