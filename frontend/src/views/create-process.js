import React from "react";
import { View } from "react-native";
import { Provider } from "react-native-paper";
import FormCreate from "../components/form-create-process";
import Header from "../components/header";
export default function CreateProcess() {
  return (
    <Provider>
      <View>
        <Header />
        <FormCreate />
      </View>
    </Provider>
  );
}
