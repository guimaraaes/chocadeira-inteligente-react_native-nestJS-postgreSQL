import React from "react";
import { View } from "react-native";
import { Provider } from "react-native-paper";
import Header from "../components/header";
// import ListProcesses from "../components/list-processes";
import Process from "../components/process";
export default function Home() {
  return (
    <Provider>
      <View>
        <Header process={true} />
        <Process />
        {/* <ListProcesses /> */}
      </View>
    </Provider>
  );
}
