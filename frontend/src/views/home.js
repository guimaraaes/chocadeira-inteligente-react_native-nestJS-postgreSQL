import React, { useState } from "react";
import { View } from "react-native";
import { Provider } from "react-native-paper";
import Header from "../components/header";
import ListProcesses from "../components/list-processes";
import api from "../services/api";

export default function Home(props) {
  const [processes, setProcesses] = useState([0]);
  const [processInProgress, setProcessInProgress] = useState(false);
  async function getProcess() {
    await api
      .get("/process", {
        headers: {
          accept: "*/*",
          Authorization: "Bearer " + props.route.params.acessToken,
        },
      })
      .then((response) => {
        setProcesses(response.data);
      })
      .catch((error) => {
        // console.log(error.response);
        alert(error.response.data.message);
      });
  }
  getProcess();
  // console.log(processes);
  return (
    <Provider>
      <View>
        <Header navigation={props.navigation} />
        {/* {setProcessInProgress(
          processes[0].data_fim === new Date(null).toISOString()
        )} */}
        <ListProcesses
          processInProgress={
            processes[0].data_fim === new Date(null).toISOString()
          }
          processes={processes}
          navigation={props.navigation}
          acessToken={props.route.params.acessToken}
        />
      </View>
    </Provider>
  );
}
