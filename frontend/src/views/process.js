import React from "react";
import { View } from "react-native";
import { Provider } from "react-native-paper";
import Header from "../components/header";
import Process from "../components/process";

export default function Process() {
  return (
    <Provider>
      <View>
        <Header process={true} />
        <Process />
      </View>
    </Provider>
  );
}
