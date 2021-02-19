import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { Provider } from "react-native-paper";
import Header from "../components/header";
import ProcessComponent from "../components/process";
import api from "../services/api";
export default function Process(props) {
  const [process, setProcess] = useState([]);
  const [history, setHistory] = useState(undefined);
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

  async function getHistory() {
    await api
      .get("process/history/" + props.route.params.id, {
        headers: {
          accept: "*/*",
          Authorization: "Bearer " + props.route.params.acessToken,
        },
      })
      .then((response) => {
        setHistory(response.data);
        // console.log(history.length);
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
  const mounted = useRef(false);

  useEffect(() => {
    const source = axios.CancelToken.source();
    if (!mounted.current) {
      getProcessById();
      getHistory();
    }
    return () => {
      source.cancel();
    };
  }, [process]);

  return (
    <Provider>
      <View>
        <Header navigation={props.navigation} process={true} />
        {/* <Text>{history[0]}</Text> */}
        {history ? (
          <ProcessComponent
            navigation={props.navigation}
            acessToken={props.route.params.acessToken}
            process={process}
            history={history}
            putFinishProcess={putFinishProcess}
          />
        ) : null}
      </View>
    </Provider>
  );
}
