import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
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
        setProcesses(response.data);
        // !processes ? setProcesses(response.data) : null;
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }
  const mounted = useRef();

  useEffect(() => {
    const source = axios.CancelToken.source();
    if (!mounted.current) getProcess();

    return () => {
      source.cancel();
    };
  }, [processes]);

  return (
    <Provider>
      <View>
        <Header
          navigation={props.navigation}
          acessToken={props.route.params.acessToken}
        />

        {processes ? (
          <ListProcesses
            getProcess={getProcess}
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
