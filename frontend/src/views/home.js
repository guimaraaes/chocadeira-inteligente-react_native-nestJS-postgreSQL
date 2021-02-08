import axios from "axios";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Provider } from "react-native-paper";
import Header from "../components/header";
import ListProcesses from "../components/list-processes";
import api from "../services/api";

export default function Home(props) {
  const [processes, setProcesses] = useState(undefined);
  const [processInProgress, setProcessInProgress] = useState(false);

  const [isMounted, setisMounted] = useState(false);

  async function getProcess() {
    return await api
      .get("/process", {
        headers: {
          accept: "*/*",
          Authorization: "Bearer " + props.route.params.acessToken,
        },
      })
      .then((response) => {
        // return response.data;
        !processes ? setProcesses(response.data) : null;
      })
      .catch((error) => {
        // console.log(error.response);
        alert(error.response.data.message);
      });
  }

  useEffect(() => {
    const source = axios.CancelToken.source();
    getProcess();
    // !processes ? getProcess().then((res) => setProcesses(res)) : null;

    return () => {
      source.cancel();
    };
  }, [processes]);

  // console.log(processes);
  return (
    <Provider>
      <View>
        <Header navigation={props.navigation} />

        {processes ? (
          <ListProcesses
            processInProgress={
              processes[0].data_fim === new Date(null).toISOString()
            }
            processes={processes}
            navigation={props.navigation}
            acessToken={props.route.params.acessToken}
          />
        ) : null}
      </View>
    </Provider>
  );
}
