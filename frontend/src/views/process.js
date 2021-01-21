import React from "react";
import { View } from "react-native";
import { Provider } from "react-native-paper";
import Header from "../components/header";
import ProcessComponent from "../components/process";

export default function Process() {
  return (
    <Provider>
      <View>
        <Header process={true} />
        <ProcessComponent />
      </View>
    </Provider>
  );
}
